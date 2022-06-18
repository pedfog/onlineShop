import { ReactElement, useState } from 'react';
import { AddIcon, RemoveIcon, TrashCanIcon } from './icons';
import { Product } from '../products/productType';

interface Props {
  product: Product;
  index: number;
}

const SingleTableRow = ({ product, index }: Props): ReactElement => {
  const { title, description, price } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const deductQuantity = () => setQuantity((prev) => (prev === 1) ? prev : (prev - 1));

  return (
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
        <button onClick={() => setQuantity((prev) => prev + 1)}>
          <AddIcon />
        </button>
      </td>
      <td className="text-center py-8">{price} &#36;</td>
      <td className="text-center py-8">{quantity * price} &#36;</td>
      <td className="text-center">
        <button className="w-max mx-auto p-2 bg-scarlet rounded-full">
          <TrashCanIcon />
        </button>
      </td>
    </tr>
  );
};

export default SingleTableRow;
