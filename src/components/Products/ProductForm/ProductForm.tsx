import { Button, Card, Grid, TextField, Typography } from '@mui/material';

import React, { FormEvent } from 'react';

import { v4 } from 'uuid';

import { IProduct } from 'interfaces/IProduct';

export interface IProductFormProps {
  handleSubmit: (payload: IProduct) => void;
}

export const quantityFieldProps = {
  min: 1,
  max: 10,
  defaultValue: 1,
};

const priceFieldProps = {
  min: 0,
  pattern: '^[0-9]*[.,]?[0-9]*$',
};

const ProductForm = (props: IProductFormProps) => {
  const { handleSubmit } = props;
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      id: v4(),
      name: data.get('name')?.toString() ?? '',
      quantity: Number(data.get('quantity')?.toString()) ?? 0,
      price: Number(data.get('price')?.toString()) ?? 0,
    };
    e.currentTarget.reset();
    handleSubmit(payload);
  };
  return (
    <Card variant='outlined' sx={{ padding: 2 }}>
      <form onSubmit={onSubmit}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item>
            <Typography variant='h4'>Add product</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField name='name' label='Product name' type='text' fullWidth={true} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='quantity'
              label='Quantity'
              type='number'
              helperText='Max. 10'
              inputProps={quantityFieldProps}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='price'
              label='Price'
              helperText='In USD'
              inputProps={priceFieldProps}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='success' fullWidth={true} type='submit'>
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default ProductForm;
