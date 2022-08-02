import { Box, List } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';

import ProductsListItem from './ProductsListItem/ProductsListItem';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListProps {
  listData: IProduct[];
  setListData: Dispatch<SetStateAction<IProduct[]>>;
}

const ProductsList = ({ listData, setListData }: IProductsListProps) => {
  console.log('rendered');
  const handleDelete = (id: string | number) => {
    setListData([...listData.filter((v) => v.id !== id)]);
  };
  return (
    <Box flex={1}>
      <List>
        {listData.map((item) => (
          <ProductsListItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </List>
    </Box>
  );
};

export default ProductsList;
