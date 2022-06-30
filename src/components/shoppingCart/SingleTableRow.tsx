import { ReactElement, useState, memo } from 'react';
import { useAppDispatch } from '../../app/hooks/reduxHooks';
import { AddIcon, RemoveIcon, TrashCanIcon } from './icons';
import { setCartCount } from '../products/CartItemsSlice';
import { ProductInStorage } from '../products/productType';

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
  index: number;
  initialQuantity: number;
  updatePrice: (price: number) => void;
}

const SingleTableRow = ({
  id, title, description, price, index, initialQuantity, updatePrice,
}: Props): ReactElement | null => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const addOrRemove = (count: number, priceToAddOrRemove: number) => {
    dispatch(setCartCount(count));
    if ((count > 0) || ((count < 0) && (quantity !== 1))) { updatePrice(priceToAddOrRemove); }
    setQuantity((prev) => ((count < 0) && (prev === 1)) ? prev : (prev + count));
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[];
    const existingItem = cartItems.find((item) => item?.product?.id === id);
    const itemIndex = cartItems.findIndex((item) => item.product?.id === id);
    if (existingItem) {
      const newQuantity = ((count < 0) && (existingItem.quantity === 1)) ? existingItem.quantity : existingItem.quantity + count;
      cartItems[itemIndex] = { product: existingItem.product, quantity: newQuantity };
      localStorage.setItem('cartItems', JSON.stringify([...cartItems]));
    }
  };

  const deleteProduct = () => {
    dispatch(setCartCount(-quantity));
    updatePrice(quantity * -price);
    setQuantity(0);
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[];
    const newArray = cartItems.filter((item) => item?.product?.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(newArray));
  };

  return quantity ? (
    <tr className="border-y-2">
      <td className="text-center py-8">{index + 1}</td>
      <td className="relative text-center py-8 [&_span]:hover:opacity-100">
        {title}
        <span className="absolute opacity-0 left-0 top-[80%] text-white bg-darkerGray p-4 rounded">
          {title}
        </span>
      </td>
      <td className="relative text-center py-8 [&_span]:hover:opacity-100">
        {(description.length > 70) ? `${description.substring(0, 70)} ...` : description}
        <span className="absolute opacity-0 left-0 top-[80%] text-white bg-darkerGray p-4 rounded font-bold">
          {description}
        </span>
      </td>
      <td className="flex items-center justify-center py-8">
        <button onClick={() => addOrRemove(-1, -price)} disabled={quantity === 1}>
          <RemoveIcon />
        </button>
        <span className="font-bold px-4">{quantity}</span>
        <button onClick={() => addOrRemove(1, price)}>
          <AddIcon />
        </button>
      </td>
      <td className="text-center py-8">{price} &#36;</td>
      <td className="text-center py-8">{quantity * price} &#36;</td>
      <td className="text-center">
        <button onClick={deleteProduct} className="w-max mx-auto p-2 bg-scarlet rounded-full">
          <TrashCanIcon />
        </button>
      </td>
    </tr>
  ) : null;
};

export default memo(SingleTableRow);
