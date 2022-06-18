import { ReactElement } from 'react';
import SingleTableRow from './SingleTableRow';
import { Product } from '../products/productType';

export default function ShoppingCart(): ReactElement {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[];

  return (
    <table className="table-auto w-full my-8 border-2">
      <thead>
        <tr className="bg-darkGray ">
          <th className="py-8 w-[5%]">Number</th>
          <th className="py-8 w-[20%]">Title</th>
          <th className="py-8 w-[29%]">Description</th>
          <th className="py-8 w-[15%]">Quantity</th>
          <th className="py-8 w-[7%]">Price</th>
          <th className="py-8 w-[7%]">Total Price</th>
          <th className="py-8 w-[5%]">{''}</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {(cartItems && cartItems[0]) ? cartItems.map((item, index) => (
          <SingleTableRow key={item.id} product={item} index={index} />
        )) : null}
      </tbody>
    </table>
  );
}
