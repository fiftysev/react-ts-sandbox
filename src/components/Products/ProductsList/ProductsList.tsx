import { Box, List } from '@mui/material';
import React from 'react';

import ProductsListItem from './ProductsListItem/ProductsListItem';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListProps {
  listData: IProduct[];
  deleteItem: (id: string | number) => void;
  updateItemQuantity: (id: string | number, value: number) => void;
}

const ProductsList = ({ listData, deleteItem, updateItemQuantity }: IProductsListProps) => {
  return (
    <Box flex={1}>
      <List>
        {listData.map((item) => (
          <ProductsListItem
            key={item.id}
            {...item}
            onDeleteClick={deleteItem}
            updateItemQuantity={updateItemQuantity}
          />
        ))}
      </List>
    </Box>
  );
};

export default ProductsList;
