import { ReactElement } from 'react';

export default function UserInfo(): ReactElement {
  return (
    <div className="flex items-center max-h-[inherit] ml-[16px] md:ml-[32px]">
      <img src="shopping-bags-icon.png" alt="avatar" className="h-[50%] border-r-[50%] rounded-full pr-2" />
      <p>Hi, James!</p>
    </div>
  );
}
