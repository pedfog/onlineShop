import { ReactElement, useState } from 'react';
import { useAppDispatch } from '../../app/hooks/reduxHooks';
import { Product, ProductInStorage } from './productType';
import { setCartCount } from './CartItemsSlice';

export default function ProductCard({ data }: { data: Product }): ReactElement {
  const dispatch = useAppDispatch();
  const { title, description } = data;

  const [isLoading, setIsLoading] = useState<{ isBtnDisabled: boolean, showSnackBar: boolean }>(
    { isBtnDisabled: false, showSnackBar: false },
  );

  const handleCartItems = () => {
    setIsLoading({ showSnackBar: false, isBtnDisabled: true });
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ProductInStorage[] | [];
    const alreadyExistingItem = cartItems.find((item) => item.product?.id === data.id);
    dispatch(setCartCount(1));
    if (!alreadyExistingItem) {
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, { product: data, quantity: 1 }]));
    } else {
      const itemIndex = cartItems.findIndex((item) => item.product?.id === data.id);
      const newQuantity = alreadyExistingItem.quantity + 1;
      cartItems[itemIndex] = { product: alreadyExistingItem.product, quantity: newQuantity };
      localStorage.setItem('cartItems', JSON.stringify([...cartItems]));
    }
    setTimeout(() => {
      setIsLoading({ showSnackBar: true, isBtnDisabled: false });
    }, 500);
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
            className="flex items-center relative px-8 py-2 bg-blue text-white"
            onClick={handleCartItems}
            type="button"
            disabled={isLoading.isBtnDisabled}
          >
            <svg
              className="absolute animate-spin left-2 h-5 w-5 text-white"
              style={{ display: isLoading.isBtnDisabled ? 'block' : 'none' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
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
