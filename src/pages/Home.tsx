import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Products from '../components/products/index';
import Navbar from '../components/navbar';

export default function HomePage(): ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
