import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';

import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';

const BaseWrapper = (WrapComponent) => {
  class BaseComponent extends React.Component {
    render() {
      const { config: { name, path, children } } = this.props;
      return (
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb" children={children}>
            <LinkHandle href="/">
              首頁
            </LinkHandle>
            <LinkHandle href={path}>{name}</LinkHandle>
          </Breadcrumbs>
          <Title mb={50} width={120}>{name}</Title>
          <WrapComponent {...this.props} />
        </Wrapper>
      );
    }
  }
  return BaseComponent;
}

export default BaseWrapper;