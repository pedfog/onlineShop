import { ReactElement, useEffect, useState, useRef, useCallback, ChangeEvent } from 'react';
import axios from 'axios';
import SearchSection from './SearchSection';
import ProductCard from './ProductCard';
import { Product } from './productType';

export default function Products(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);

  const allProducts = useRef<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then((res: { data: Product[] }) => {
        setProducts(res.data);
        allProducts.current = [...res.data];
      })
      .catch(() => { });
  }, []);

  const onSearchSubmit = useCallback((value: string) => {
    const result = allProducts.current.filter((product) => {
      const { category, title } = product;
      return (category.toLowerCase().includes(value) || title.toLowerCase().includes(value));
    });
    setProducts(result);
  }, []);

  const onChangeCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const result = allProducts.current.filter((product) => product.category.includes(e.target.value));
    setProducts(result);
  }, []);

  return (
    <>
      <SearchSection onSubmit={onSearchSubmit} onChangeCategory={onChangeCategory} />
      <div className="grid gap-16 grid-cols-3 mx-4 md:mx-8 mt-8 md:mt-16">
        {(products && products[0]) ? products.map((product) => (
          <ProductCard key={product.id} data={product} />
        )) : null}
      </div>
    </>
  );
}
