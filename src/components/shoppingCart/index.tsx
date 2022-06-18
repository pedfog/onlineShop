import { ReactElement, useState, useCallback } from 'react';
import SingleTableRow from './SingleTableRow';
import { Product } from '../products/productType';

export default function ShoppingCart(): ReactElement {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[];
  const calculateTotalPrice = (): number => {
    if (cartItems && cartItems[0]) {
      const prices = cartItems.map((item) => item.price);
      const totalPrice = prices.reduce((a, b) => a + b);
      return totalPrice;
    }
    return 0;
  };

  const [total, setTotal] = useState<number>(calculateTotalPrice);

  const add = useCallback((price: number) => {
    setTotal((prev) => prev + price);
  }, []);
  const remove = useCallback((price: number) => {
    setTotal((prev) => prev - price);
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
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              index={index}
              add={add}
              remove={remove}
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
