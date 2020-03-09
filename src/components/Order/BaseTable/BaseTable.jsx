import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import BaseButton from '../../BaseButton/BaseButton';
import { Head, HeadText, Body, BodyText, Content, Wrapper, RightArrow } from './BaseTable.style';
import rightArrow from '../../../assets/img/Icon/page_rightarrow.svg';

const BaseTable = ({ tHead, tBody, history }) => {
  let isWeb = window.innerWidth > 960;
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

  const goOrder = (id) => {
    if (isWeb) return;
    history.push(`/order/${id}?status=done`);
  }

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
            <Content key={item._id} onClick={() => goOrder(item._id)}>
              <BodyText>{item.orderNumber}</BodyText>
              <BodyText>{moment(item.createdAt).format('YYYY/MM/DD')}</BodyText>
              <BodyText>NT${item.amount}</BodyText>
              {
                isWeb ?
                  <React.Fragment>
                    <BodyText mr='105'>{convertStatus(item.orderStatus)}</BodyText>
                    <BaseButton width='76' height='28' fz='14' padding='3px 24px 4px 24px' color='light-brown' onClick={() => history.push(`/order/${item._id}?status=done`)}>明細</BaseButton>
                  </React.Fragment>
                  : <RightArrow src={rightArrow} />
              }
            </Content>
          )
        }
      </Body>
    </Wrapper>
  )
}

export default withRouter(BaseTable);