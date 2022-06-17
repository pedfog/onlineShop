import { ReactElement } from 'react';
import { Product } from './productType';

export default function ProductCard({ data }: { data: Product }): ReactElement {
  const { title, description } = data;

  return (
    <div className="flex flex-col shadow-md h-[500px]">
      <div className="h-[40%] flex justify-center w-full shadow-md">
        <img src={data.image} alt={data.title} className="max-h-full" />
      </div>
      <div className="flex flex-col justify-between h-[60%] p-8">
          <h5 className="mb-4">
            {title.substring(0, 75) + (title.length > 75 ? ' ...' : '')}
          </h5>
          <p>{description.substring(0, 251) + (description.length > 251 ? ' ...' : '')}</p>
          <p className="font-medium">{data.category}</p>
          <div className="flex items-center justify-between">
            <p>{`price ${data.price}`} &#36;</p>
            <button className="px-8 py-2 bg-blue">
              Add to cart
            </button>
          </div>
        </div>
    </div>
  );
}
