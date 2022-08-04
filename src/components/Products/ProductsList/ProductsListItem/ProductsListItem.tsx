import { ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined } from '@mui/icons-material';
import { IconButton, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListItemProps extends IProduct {
  onDeleteClick: (id: string | number) => void;
  updateItemQuantity: (id: string | number, value: number) => void;
}

const ProductsListItem = (props: IProductsListItemProps) => {
  const subtotalPrice = useMemo(() => props.quantity * props.price, [props.price, props.quantity]);
  return (
    <Paper>
      <ListItem sx={{ justifyContent: 'space-between' }}>
        <ListItemText
          sx={{ flex: 1 }}
          primary={
            <Typography textAlign='center' fontWeight='bold'>
              {props.name}
            </Typography>
          }
        />
        <ListItemText
          sx={{ flex: 1 }}
          primary={<Typography fontWeight='bold'>{subtotalPrice.toFixed(2)} $</Typography>}
          secondary={
            <Typography sx={{ display: 'inline' }} component='span' color='text.secondary'>
              {props.price} $ per piece
            </Typography>
          }
        />
        <Stack direction='row' alignItems='center'>
          <IconButton
            aria-label='decrement quantity'
            onClick={() => props.updateItemQuantity(props.id, props.quantity - 1)}
          >
            <ArrowLeftOutlined />
          </IconButton>
          <ListItemText>{props.quantity}</ListItemText>
          <IconButton
            aria-label='increment quantity'
            onClick={() => props.updateItemQuantity(props.id, props.quantity + 1)}
          >
            <ArrowRightOutlined />
          </IconButton>
        </Stack>
        <IconButton aria-label='delete item' onClick={() => props.onDeleteClick(props.id)}>
          <DeleteOutlined color='error' />
        </IconButton>
      </ListItem>
    </Paper>
  );
};

export default ProductsListItem;
