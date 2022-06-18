import { ReactElement, useState } from 'react';
import { Product } from '../products/productType';

interface Props {
  product: Product;
  index: number;
}

const SingleTableRow = ({ product, index }: Props): ReactElement => {
  const { title, description, price } = product;
  const [quantity, setQuantity] = useState<number>(1);

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
        <button>
          <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z"
              fill="#ed6a5a"
            />
          </svg>
        </button>
        <span className="font-bold px-4">{quantity}</span>
        <button>
          <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"
              fill="#508ca4"
            />
          </svg>
        </button>
      </td>
      <td className="text-center py-8">{price} &#36;</td>
      <td className="text-center py-8">{quantity * price} &#36;</td>
      <td className="text-center">
        <button className="w-max mx-auto p-2 bg-scarlet rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20px"
            height="20px"
            className=""
          >
            <path
              d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
              fill="#fff"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default SingleTableRow;
