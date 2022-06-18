import { ReactElement } from 'react';
import SingleTableRow from './SingleTableRow';
import { Product } from '../products/productType';

export default function ShoppingCart(): ReactElement {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[];

  return (
    <table className="table-auto w-full mt-8 border-2">
      <thead>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>{''}</th>
        </tr>
      </thead>
      <tbody>
        {(cartItems && cartItems[0]) ? cartItems.map((item, index) => (
          <SingleTableRow key={item.id} product={item} index={index} />
        )) : null}
      </tbody>
    </table>
  );
}
