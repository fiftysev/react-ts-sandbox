import { Box, List } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';

import ProductsListItem from './ProductsListItem/ProductsListItem';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListProps {
  listData: IProduct[];
  setListData: Dispatch<SetStateAction<IProduct[]>>;
}

const ProductsList = ({ listData }: IProductsListProps) => {
  return (
    <Box flex={1}>
      <List>
        {listData.map((item, index) => (
          <ProductsListItem key={`${item.name}_${index}`} {...item} />
        ))}
      </List>
    </Box>
  );
};

export default ProductsList;
