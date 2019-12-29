import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';

import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';

const BaseWrapper = (WrapComponent) => {
  class BaseComponent extends React.Component {
    render() {
      const { config: { breadcrumb, path, children, name } } = this.props;
      return (
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb" children={children}>
            <LinkHandle href="/">
              首頁
            </LinkHandle>
            <LinkHandle href={path}>{breadcrumb}</LinkHandle>
          </Breadcrumbs>
          {
            name ? <Title mb={50} width={120}>{breadcrumb}</Title> : null
          }
          <WrapComponent {...this.props} />
        </Wrapper>
      );
    }
  }
  return BaseComponent;
}

export default BaseWrapper;