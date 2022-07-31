import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

interface ProductFormProps {}

const quantityFieldProps = {
  min: 1,
  max: 10,
  defaultValue: 1,
};

const priceFieldProps = {
  min: 0,
  defaultValue: 0,
};

const ProductForm = (props: ProductFormProps) => {
  return (
    <Card variant='outlined' sx={{ padding: 2 }}>
      <form>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item>
            <Typography variant='h4'>Add product</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField name='product' label='Product name' type='text' fullWidth={true} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='product'
              label='Quantity'
              type='number'
              helperText='Max. 10'
              inputProps={quantityFieldProps}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='product'
              label='Price'
              type='number'
              helperText='In RUB currency'
              inputProps={priceFieldProps}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='outlined' fullWidth={true}>
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default ProductForm;
