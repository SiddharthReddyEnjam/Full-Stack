import { Grid2 } from '@mui/material';
import getProducts from './actions/get-products';
import Product from './product';

export default async function Products() {
  const products = await getProducts();

  return (
    <Grid2 container spacing={3} sx={{ height: '85vh', overflow: 'scroll' }}>
      {products.map((product) => (
        <Grid2 key={product.id} size={{ sm: 6, lg: 4, xs: 12 }}>
          <Product product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
}
