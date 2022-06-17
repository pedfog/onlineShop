import { ReactElement, useEffect, useState, useMemo, useRef } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import SearchSection from './SearchSection';
import { Product } from './productType';

export default function Products(): ReactElement {
  const [products, setProducts] = useState<number>(0);
  const x = useRef(0);

  useEffect(() => {

  }, []);

  const onSearchSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <SearchSection onSubmit={onSearchSubmit} />
      <ProductsList />
    </>
  );
}
