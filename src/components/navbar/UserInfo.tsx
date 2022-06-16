import { ReactElement, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { User } from './userTypes';
import useClickOutside from '../../app/hooks/useClickOutside';

const UserInfo = (): ReactElement => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [userInfo, setUserInfo] = useState<User>();
  const [isUserInfoOpen, setIsUserInfoOpen] = useState<boolean>(false);

  useEffect(() => {
    axios.get<User>('https://fakestoreapi.com/users/1')
      .then((res: { data: User }) => setUserInfo(res.data))
      .catch(() => { });
  }, []);

  const openUserInfo = () => setIsUserInfoOpen(true);
  useClickOutside(rootRef, () => setIsUserInfoOpen(false));

  return (
    <div
      ref={rootRef}
      role="button"
      className="flex relative items-center max-h-[inherit] ml-[16px] md:ml-[32px]"
      onClick={openUserInfo}
      onKeyDown={openUserInfo}
      tabIndex={0}
    >
      <img src="avatar-159236_640.png" alt="avatar" className="h-[50%] border-r-[50%] rounded-full mr-2 border aspect-square" />
      <h6 className="hidden md:block">
        {userInfo ? `Hi, ${userInfo?.name?.firstname || ''}` : ''}
      </h6>
      {isUserInfoOpen ? (
        <div className="block md:hidden absolute top-full px-4 py-2 bg-brandGreen rounded">
          {userInfo ? `Hi, ${userInfo?.name?.firstname || ''}` : ''}
        </div>
      ) : null}
    </div>
  );
};
export default UserInfo;
