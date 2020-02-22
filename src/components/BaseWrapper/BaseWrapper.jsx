import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '@material-ui/core';
import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';
import { productType } from '../../lib/productType';
const BaseWrapper = (WrapComponent, types) => {
  const BaseComponent = (props) => {
    const product = useSelector(state => state.product.product);
    const breadcrumbs = useSelector(state => state.product.breadcrumb);
    const isLoading = useSelector(state => state.product.isLoading);

    const { config: { breadcrumb, name, path, newPath } } = props;
    console.log(props);
    return (
      <Wrapper>
        <Breadcrumbs aria-label="breadcrumb">
          <LinkHandle href="/">
            首頁
            </LinkHandle>
          <LinkHandle href={newPath ? newPath : path}>
            {breadcrumb}
          </LinkHandle>
          {
            isLoading&&name==='product' ? <Skeleton width={50} height={20} /> :
              types ?
                <LinkHandle>
                  {productType[product.classification].name}
                </LinkHandle> : null
          }
          {
            isLoading&&name==='product' ? <Skeleton width={50} height={20} /> :
              types ?
                <LinkHandle>
                  {breadcrumbs}
                </LinkHandle> : null
          }
        </Breadcrumbs>
        {
          name ? <Title mb={50} width={120}>{breadcrumb}</Title> : null
        }
        <WrapComponent {...props} />
      </Wrapper>
    );
  }
  return BaseComponent;
}

export default BaseWrapper;