import { ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined } from '@mui/icons-material';
import { IconButton, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import { IProduct } from 'interfaces/IProduct';

interface IProductsListItemProps extends IProduct {
  handleDelete: (id: string | number) => void;
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
          <IconButton>
            <ArrowLeftOutlined aria-label='decrement quantity' />
          </IconButton>
          <ListItemText>{props.quantity}</ListItemText>
          <IconButton aria-label='increment quantity'>
            <ArrowRightOutlined />
          </IconButton>
        </Stack>
        <IconButton aria-label='delete item' onClick={() => props.handleDelete(props.id)}>
          <DeleteOutlined color='error' />
        </IconButton>
      </ListItem>
    </Paper>
  );
};

export default ProductsListItem;
