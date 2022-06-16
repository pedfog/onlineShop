import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Product } from './productType';

export default function Products(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then((res: { data: Product[] }) => setProducts(res.data))
      .catch(() => { });
  }, []);

  return (
    <div className="grid gap-16 grid-cols-3 mx-4 md:mx-8 mt-8 md:mt-16">
      {(products && products[0]) ? products.map((product) => (
        <ProductCard key={product.id} data={product} />
      )) : null}
    </div>
  );
}
