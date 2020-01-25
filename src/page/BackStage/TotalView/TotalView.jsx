import React, { useState } from 'react';
import BoxResult from '../../../components/BackStage/TotalView/BoxResult/BoxResult';

import { Wrapper, TotalWrapper, ChartWrapper, BottomWrapper } from './TotalView.style';
import PositionText from '../../../components/BackStage/PositionText/PositionText';
import AreaChart from '../../../components/BackStage/TotalView/AreaChart/AreaChart';
import Ranking from '../../../components/BackStage/TotalView/Ranking/Ranking';

import imgTodayOrder from '../../../assets/img/Backstage/TotalView/icon_today_order.svg';
import imgTotalOrder from '../../../assets/img/Backstage/TotalView/icon_total_order.svg';
import imgTotalProduct from '../../../assets/img/Backstage/TotalView/icon_total_produc.svg';
import imgMemberOrder from '../../../assets/img/Backstage/TotalView/icon_total_menber.svg';

const data = [
  {
    "name": "12/07",
    "uv": 4000,
  },
  {
    "name": "12/08",
    "uv": 3000,
  },
  {
    "name": "12/09",
    "uv": 2000,
  },
  {
    "name": "12/10",
    "uv": 2780,
  },
  {
    "name": "12/11",
    "uv": 1890,
  },
  {
    "name": "12/12",
    "uv": 2390,
  },
  {
    "name": "12/13",
    "uv": 3490,
  }
]

const TotalView = ({ name }) => {
  const [topInfoBoxes] = useState([
    {
      title: '今日訂單數',
      total: 0,
      width: '75',
      imgUrl: imgTodayOrder,
      mr: '31',
    },
    {
      title: '訂單總數',
      total: 0,
      width: '64',
      imgUrl: imgTotalOrder,
      mr: '50',
    },
    {
      title: '商品總數',
      total: 0,
      width: '64',
      imgUrl: imgTotalProduct,
      mr: '51',
    },
    {
      title: '會員總數',
      total: 0,
      width: '69',
      imgUrl: imgMemberOrder,
      mr: '46',
    },
  ]);
  const [topSales] = useState([
    {
      title: 'diam nonumy eirmod',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'sed diam voluptua',
    },
    {
      title: 'consetetur sadipscing elitr',
    },
    {
      title: 'takimata sanctus est',
    }
  ]);

  return (
    <Wrapper>
      <PositionText title={name} />
      <TotalWrapper>
        {
          topInfoBoxes.map(box => <BoxResult key={box.title} title={box.title} width={box.width} imgUrl={box.imgUrl} total={box.total} mr={box.mr} />)
        }
      </TotalWrapper>
      <ChartWrapper>
        <AreaChart data={data} title='所有商品瀏覽次數' />
        <AreaChart data={data} title='營業額' />
      </ChartWrapper>
      <BottomWrapper>
        <BottomWrapper>
          <Ranking rankList={topSales} title='商品銷量排行' />
          <Ranking rankList={topSales} title='商品瀏覽排行' />
        </BottomWrapper>
        <AreaChart data={data} title='訂單數' />
      </BottomWrapper>
    </Wrapper>
  )
}

export default TotalView;