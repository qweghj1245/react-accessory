import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '@material-ui/core';
import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';
import { productType } from '../../lib/productType';
const BaseWrapper = (WrapComponent, types) => {
  const BaseComponent = (props) => {
    const product = useSelector(state => state.product.product);
    const breadcrumbs = useSelector(state => state.product.breadcrumb);

    const { config: { breadcrumb, name, path, newPath } } = props;
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
            types ?
              <LinkHandle>
                {productType[product.classification].name}
              </LinkHandle> : null
          }
          {
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