import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function HomePage(): ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
