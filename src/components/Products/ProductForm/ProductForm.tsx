import { Button, Card, Grid, TextField, Typography } from '@mui/material';

import React, { ChangeEvent, FormEvent } from 'react';

import { IProduct } from 'interfaces/IProduct';

export interface IProductFormProps {
  data: IProduct;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const quantityFieldProps = {
  min: 1,
  max: 10,
};

const priceFieldProps = {
  min: 0,
};

const ProductForm = (props: IProductFormProps) => {
  const { handleSubmit, handleInputChange } = props;
  return (
    <Card variant='outlined' sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item>
            <Typography variant='h4'>Add product</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='name'
              label='Product name'
              type='text'
              fullWidth={true}
              value={props.data.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='quantity'
              label='Quantity'
              type='number'
              helperText='Max. 10'
              inputProps={quantityFieldProps}
              fullWidth={true}
              value={props.data.quantity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='price'
              label='Price'
              type='number'
              helperText='In RUB currency'
              inputProps={priceFieldProps}
              fullWidth={true}
              value={props.data.price}
              onChange={handleInputChange}
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
