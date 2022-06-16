import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import Cart from './Cart';

export default function Navbar(): ReactElement {
  return (
    <div className="max-h-[60px] md:max-h-[96px] bg-[#e8eef2] grid grid-cols-3 shadow-md">
      <UserInfo />
      <Link to="/" className="flex items-center">
        <img src="shopping-bags-icon.png" alt="logo" className="w-max mx-auto py-2 max-h-[60px] md:max-h-[96px]" />
      </Link>
      <Cart />
    </div>
  );
}
