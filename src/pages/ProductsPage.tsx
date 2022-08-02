import { Container } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 } from 'uuid';

import ProductForm from '../components/Products/ProductForm/ProductForm';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import { IProduct } from '../interfaces/IProduct';

interface IProductsPageProps {}

const initialProductState = { id: Number.MIN_SAFE_INTEGER, name: '', quantity: 1, price: 0 };

const ProductsPage = (props: IProductsPageProps) => {
  console.log('rendered');
  const [id] = useState(v4);
  const [product, setProduct] = useState<IProduct>(initialProductState);
  const [listData, setListData] = useState<IProduct[]>([]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct({ ...product, id });
    setListData([...listData, product]);
    setProduct(initialProductState);
  };

  return (
    <Container maxWidth='md' sx={{ marginY: 2 }}>
      <ProductForm data={product} handleInputChange={onInputChange} handleSubmit={onSubmit} />
      <ProductsList listData={listData} setListData={setListData} />
    </Container>
  );
};

export default ProductsPage;
