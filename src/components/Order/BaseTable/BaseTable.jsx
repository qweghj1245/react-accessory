import React from 'react';
import { withRouter } from 'react-router-dom';

import BaseButton from '../../BaseButton/BaseButton';
import { Head, HeadText, Body, BodyText, Content, Wrapper } from './BaseTable.style';

const BaseTable = ({ tHead, tBody, history }) => {
  return (
    <Wrapper>
      <Head>
        {
          tHead.map(item => <HeadText key={item}>{item}</HeadText>)
        }
      </Head>
      <Body>
        {
          tBody.map(item =>
            <Content key={item.id}>
              <BodyText>{item.id}</BodyText>
              <BodyText>{item.createdAt}</BodyText>
              <BodyText>NT${item.price}</BodyText>
              <BodyText mr='105'>{item.status}</BodyText>
              <BaseButton width='76' height='28' fz='14' padding='3px 24px 4px 24px' color='light-brown' onClick={() => history.push('/order/aaa')}>明細</BaseButton>
            </Content>
          )
        }
      </Body>
    </Wrapper>
  )
}

export default withRouter(BaseTable);