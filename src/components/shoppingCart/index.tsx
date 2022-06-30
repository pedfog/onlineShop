import { ReactElement, useState, useCallback, useEffect } from 'react';
import SingleTableRow from './SingleTableRow';
import { ProductInStorage } from '../products/productType';

export default function ShoppingCart(): ReactElement {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[];
  const calculateTotalPrice = (): number => {
    if (cartItems && cartItems[0]) {
      const prices = cartItems.map((item) => item?.product?.price * item.quantity);
      const totalPrice = prices.reduce((a, b) => a + b);
      return totalPrice;
    }
    return 0;
  };
  const totalPrice = calculateTotalPrice();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(totalPrice);
  }, [cartItems]);

  const updatePrice = useCallback((price: number) => {
    setTotal((prev) => prev + price);
  }, []);

  return (
    <table className="table-auto w-full my-8 border-2">
      <thead>
        <tr className="bg-darkGray ">
          <th className="py-8 w-[5%]">Number</th>
          <th className="py-8 w-[20%]">Title</th>
          <th className="py-8 w-[29%]">Description</th>
          <th className="py-8 w-[15%]">Quantity</th>
          <th className="py-8 w-[7%]">Price</th>
          <th className="py-8 w-[7%]">Total Price</th>
          <th className="py-8 w-[5%]">{''}</th>
        </tr>
      </thead>
      <tbody className="table-body">
        <>
          {(cartItems && cartItems[0]) ? cartItems.map((item, index) => (
            <SingleTableRow
              key={item?.product?.id}
              id={item?.product?.id}
              title={item?.product?.title}
              description={item?.product?.description}
              price={item?.product?.price}
              index={index}
              initialQuantity={item.quantity || 1}
              updatePrice={updatePrice}
            />
          )) : null}
        </>
        {(cartItems && cartItems[0]) ? (
          <tr>
            <td className="text-center font-bold py-4">Total</td>
            <td />
            <td />
            <td />
            <td />
            <td className="text-center font-bold py-4">{total.toFixed(2)} &#36;</td>
            <td />
          </tr>
        ) : null}
      </tbody>
    </table>
  );
}
