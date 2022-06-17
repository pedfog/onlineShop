import { ReactElement } from 'react';
import { Product } from './productType';

export default function ProductCard({ data }: { data: Product }): ReactElement {
  const { title, description } = data;

  return (
    <div className="flex flex-col shadow-md h-[500px]">
      <div className="h-[40%] flex justify-center w-full shadow-md">
        <img src={data.image} alt={data.title} className="max-h-full" />
      </div>
      <div className="flex flex-col justify-between h-[60%] p-4 md:p-8 lg:p-4 xl:p-8">
        <h5 className="text-[20px] md:text-[24px] mb-4 line-clamp-2 h-max">
          {title}
        </h5>
        <p className="line-clamp-3">{description}</p>
        <p className="font-medium">{data.category}</p>
        <div className="flex items-center justify-between lg:block xl:flex">
          <p>
            {`price ${data.price}`} &#36;
          </p>
          <button className="px-8 py-2 bg-blue">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
