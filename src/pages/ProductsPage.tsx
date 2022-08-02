import { Container } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import ProductForm from '../components/Products/ProductForm/ProductForm';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import { IProduct } from '../interfaces/IProduct';

interface IProductsPageProps {}

const ProductsPage = (props: IProductsPageProps) => {
  const [product, setProduct] = useState<IProduct>({ name: '', quantity: 1, price: 0 });
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
    setListData([...listData, product]);
  };

  return (
    <Container maxWidth='md' sx={{ marginY: 2 }}>
      <ProductForm handleInputChange={onInputChange} handleSubmit={onSubmit} />
      <ProductsList
        listData={[{ name: 'Test', quantity: 2, price: 123.2 }]}
        setListData={setListData}
      />
    </Container>
  );
};

export default ProductsPage;
