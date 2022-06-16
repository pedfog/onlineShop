import { ReactElement } from 'react';
import UserInfo from './UserInfo';

export default function Navbar(): ReactElement {
  return (
    <div className="max-h-[96px] bg-[#e8eef2] grid grid-cols-3">    
      <UserInfo />
    </div>
  );
}
