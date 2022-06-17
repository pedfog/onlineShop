import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks/reduxHooks';
import { CartItems } from '../products/CartItemsSlice';

export default function Cart(): ReactElement {
  const cartItemsCount: string = useAppSelector((state: { cartItems: CartItems }) => state?.cartItems.cartItemsCount) as string || '0';
  return (
    <Link to="/cart" className="flex items-center justify-end mr-[16px] md:mr-[32px]">
      <h6 className="pr-[8px]">
        Cart
      </h6>
      <div className="text-white p-[10px] rounded-full bg-scarlet aspect-square leading-[10px]">
        {cartItemsCount}
      </div>
    </Link>
  );
}
