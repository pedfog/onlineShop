import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/navbar';
import NotFoundPage from './pages/404Page';
import Cart from './components/navbar/Cart';

export default function App(): ReactElement {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
