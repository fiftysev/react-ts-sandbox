import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductForm from '../components/Products/ProductForm/ProductForm';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import { IProduct } from '../interfaces/IProduct';

import { addProduct } from 'features/Products/productsSlice';

import type { RootState } from 'store/store';

interface IProductsPageProps {}

const ProductsPage = (props: IProductsPageProps) => {
  const [listData, setListData] = useState<IProduct[]>([]);

  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  return (
    <Container maxWidth='md' sx={{ marginY: 2 }}>
      <ProductForm handleSubmit={(payload: IProduct) => dispatch(addProduct(payload))} />
      <ProductsList listData={products} setListData={setListData} />
    </Container>
  );
};

export default ProductsPage;
