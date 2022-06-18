import { ReactElement, useState, memo } from 'react';
import { useAppDispatch } from '../../app/hooks/reduxHooks';
import { AddIcon, RemoveIcon, TrashCanIcon } from './icons';
import { setCartCount } from '../products/CartItemsSlice';
import { Product } from '../products/productType';

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
  index: number;
  add: (price: number) => void;
  remove: (price: number) => void;
}

const SingleTableRow = ({
  id, title, description, price, index, add, remove,
}: Props): ReactElement | null => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const deductQuantity = () => {
    if (quantity !== 1) { remove(price); }
    setQuantity((prev) => (prev === 1) ? prev : (prev - 1));
  };
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
    add(price);
  };
  const deleteProduct = () => {
    remove(quantity * price);
    setQuantity(0);
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[];
    const newArray = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(newArray));
    dispatch(setCartCount('delete'));
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
        <button onClick={deductQuantity}>
          <RemoveIcon />
        </button>
        <span className="font-bold px-4">{quantity}</span>
        <button onClick={addQuantity}>
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
