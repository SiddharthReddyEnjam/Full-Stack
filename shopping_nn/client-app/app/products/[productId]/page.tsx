import { Grid2, Stack, Typography } from '@mui/material';
import getProduct from './get-product';
import { getProductImage } from '../product-image';
import Image from 'next/image';

interface singleProductProps {
  params: { productId: string };
}

export default async function singleProduct({ params }: singleProductProps) {
  const product = await getProduct(+params.productId);

  return (
    <Grid2 container marginBottom={'2rem'} rowGap={3}>
      {product.imageExists && (
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            width='0'
            height='0'
            className='w-auto md:w-1/2 h-auto'
            sizes='100vw'
            alt='Picture of the product'
          />
        </Grid2>
      )}
      <Grid2 size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography variant='h2'>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h4'>${product.price}</Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
