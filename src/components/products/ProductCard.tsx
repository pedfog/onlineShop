import { ReactElement, useState } from 'react';
import { useAppDispatch } from '../../app/hooks/reduxHooks';
import { Product } from './productType';
import { setCartCount } from './CartItemsSlice';

export default function ProductCard({ data }: { data: Product }): ReactElement {
  const dispatch = useAppDispatch();
  const { title, description } = data;

  const [isLoading, setIsLoading] = useState<{ isBtnDisabled: boolean, showSnackBar: boolean }>(
    { isBtnDisabled: false, showSnackBar: false },
  );

  const handleCartItems = () => {
    setIsLoading((prev) => ({ ...prev, showSnackBar: false, isBtnDisabled: true }));
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[] | [];
    const isItemAlreadyAdded = cartItems.some((item) => item.id === data.id);
    dispatch(setCartCount(isItemAlreadyAdded ? '' : 'add'));
    if (!isItemAlreadyAdded) {
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, data]));
    }
    setIsLoading((prev) => ({ ...prev, showSnackBar: true, isBtnDisabled: false }));
  };

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
          <button
            className="px-8 py-2 bg-blue text-white disabled:"
            onClick={handleCartItems}
            type="button"
            disabled={isLoading.isBtnDisabled}
          >
            Add to cart
          </button>
        </div>
      </div>
      {(isLoading.showSnackBar) ? (
      <div className="fixed bottom-2 left-2 text-white px-4 py-2 bg-successGreen rounded animate-fade opacity-0">
        Item added to your card successfully
      </div>
      ) : null}
    </div>
  );
}
