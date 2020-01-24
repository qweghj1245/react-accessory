import React from 'react';
import { Breadcrumbs } from '@material-ui/core';

import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';

const BaseWrapper = (WrapComponent, others) => {
  class BaseComponent extends React.Component {
    render() {
      const { config: { breadcrumb, name, path, newPath }, match } = this.props;
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
              others&&others.type ?
                <LinkHandle href="/">
                  {others.type}
                </LinkHandle> : null
            }
            {
              others ?
                <LinkHandle href={match.url}>
                  {others.id}
                </LinkHandle> : null
            }
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