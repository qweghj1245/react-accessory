import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Flex, BaseWrapper } from '../../../assets/css/global.style';

const ProductSkeleton = () => {
  return (
    <Flex align='start' mb='132' mt='50'>
      <BaseWrapper>
        <Skeleton variant="rect" width={385} height={385} />
        <Flex justify='between' mt='20'>
          <Skeleton variant="rect" width={110} height={110} />
          <Skeleton variant="rect" width={110} height={110} />
          <Skeleton variant="rect" width={110} height={110} />
        </Flex>
      </BaseWrapper>
      <BaseWrapper ml='101'>
        <Skeleton width={100} height={30} style={{ marginBottom: '16px'}}/>
        <Skeleton width={120} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={120} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={200} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={200} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={300} height={30} />
      </BaseWrapper>
    </Flex>
  );
}

export default ProductSkeleton;