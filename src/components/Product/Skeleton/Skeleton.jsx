import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Flex, BaseWrapper } from '../../../assets/css/global.style';
import { FlexWrapper } from './Skeleton.style';

const ProductSkeleton = () => {
  let width = window.innerWidth > 960;
  return (
    <FlexWrapper align='start' mb='132' mt='50'>
      <BaseWrapper mb={width ? 20 : 0}>
        <Skeleton variant="rect" width={width ? 385 : '100%'} height={385} />
        <Flex justify='between' mt='20'>
          <Skeleton variant="rect" width={110} height={110} />
          <Skeleton variant="rect" width={110} height={110} />
          <Skeleton variant="rect" width={110} height={110} />
        </Flex>
      </BaseWrapper>
      <BaseWrapper ml={width ? 101 : 0} mt={width ? 0 : 20}>
        <Skeleton width={100} height={30} style={{ marginBottom: '16px'}}/>
        <Skeleton width={120} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={120} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={200} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={200} height={30} style={{ marginBottom: '16px'}} />
        <Skeleton width={300} height={30} />
      </BaseWrapper>
    </FlexWrapper>
  );
}

export default ProductSkeleton;