import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './userTypes';

const UserInfo = (): ReactElement => {
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    axios.get<User>('https://fakestoreapi.com/users/1')
      .then((res: { data: User }) => setUserInfo(res.data))
      .catch(() => { });
  }, []);

  return (
    <div className="flex items-center max-h-[inherit] ml-[16px] md:ml-[32px]">
      <img src="avatar-159236_640.png" alt="avatar" className="h-[50%] border-r-[50%] rounded-full mr-2 border aspect-square" />
      <h6>{userInfo ? `Hi, ${userInfo?.name?.firstname || ''}` : ''}</h6>
    </div>
  );
};
export default UserInfo;
