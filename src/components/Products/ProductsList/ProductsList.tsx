import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import ProductsListItem from './ProductsListItem/ProductsListItem';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListProps {
  listData: IProduct[];
  deleteItem: (id: string | number) => void;
  updateItemQuantity: (id: string | number, value: number) => void;
}

const ProductsList = ({ listData, deleteItem, updateItemQuantity }: IProductsListProps) => {
  const total = useMemo(
    () => listData.reduce((prev, cur) => (prev += cur.price * cur.quantity), 0),
    [listData],
  );
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
        {listData.length > 0 && (
          <Paper>
            <ListItem>
              <ListItemText
                sx={{ mx: 1.25 }}
                primary={
                  <Typography variant='h5' fontWeight='bold' textAlign='right'>
                    Total: {total} $
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        )}
      </List>
    </Box>
  );
};

export default ProductsList;
