import React from 'react';
import { Breadcrumbs } from '@material-ui/core';

import { Wrapper, LinkHandle } from './BaseWrapper.style';
import { Title } from '../../assets/css/global.style';

const BaseWrapper = (WrapComponent) => {
  class BaseComponent extends React.Component {
    render() {
      const { config: { breadcrumb, children, name } } = this.props;
      // const originPath = this.props.config.path.replace(':id', '');
      return (
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb" children={children}>
            <LinkHandle href="/">
              首頁
            </LinkHandle>

            {/* 等api來，拉出type跟id跟name */}
            {/* <LinkHandle onClick={() => history.push(`${originPath}ddd`)}>{breadcrumb}</LinkHandle>
            <LinkHandle href={path}>{breadcrumb}</LinkHandle>
            <LinkHandle href={path}>{breadcrumb}</LinkHandle> */}
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