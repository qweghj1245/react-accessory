import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import BaseButton from '../../BaseButton/BaseButton';
import { Head, HeadText, Body, BodyText, Content, Wrapper } from './BaseTable.style';

const BaseTable = ({ tHead, tBody, history }) => {
  const convertStatus = (status) => {
    switch (status) {
      case 'notYet':
        return '未完成';
      case 'handling':
        return '處理中';
      case 'isComplete':
        return '已完成';
      default:
        return;
    }
  };

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
            <Content key={item._id}>
              <BodyText>{item.orderNumber}</BodyText>
              <BodyText>{moment(item.createdAt).format('YYYY/MM/DD')}</BodyText>
              <BodyText>NT${item.amount}</BodyText>
              <BodyText mr='105'>{convertStatus(item.orderStatus)}</BodyText>
              <BaseButton width='76' height='28' fz='14' padding='3px 24px 4px 24px' color='light-brown' onClick={() => history.push(`/order/${item._id}?status=done`)}>明細</BaseButton>
            </Content>
          )
        }
      </Body>
    </Wrapper>
  )
}

export default withRouter(BaseTable);