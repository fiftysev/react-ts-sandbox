import { ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined } from '@mui/icons-material';
import { IconButton, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import { update } from 'lodash';
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
      <ListItem>
        <ListItemText
          primary={
            <Typography textAlign='center' fontWeight='bold' maxWidth='30%'>
              {props.name}
            </Typography>
          }
        />
        <ListItemText
          primary={<Typography fontWeight='bold'>{subtotalPrice}</Typography>}
          secondary={
            <Typography sx={{ display: 'inline' }} component='span' color='text.secondary'>
              {props.price} per piece
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
