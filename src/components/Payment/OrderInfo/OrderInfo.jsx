import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormInput from '../../FormInput/FormInput';
import BaseSelect from '../../BaseSelect/BaseSelect';
import { Slider, SlideNotice, SlideTitle, NoticeFlex, Content, FormGroup, Address, FlexStart } from './OrderInfo.style';
import { Icon } from '../../../assets/css/global.style';

import arrow from '../../../assets/img/Icon/Icon material-keyboard-arrow-up.svg';

const useStyles = makeStyles({
  root: {
    marginTop: '15px',
    marginLeft: '20px',
    '& span': {
      fontSize: '14px',
      color: '#999999',
    },
  },
});

const city = [
  {
    value: 'city1',
    label: 'city11',
  },
  {
    value: 'city2',
    label: 'city2',
  }
];
const area = [
  {
    value: 'area1',
    label: 'area11',
  },
  {
    value: 'area2',
    label: 'area2',
  }
];

const OrderInfo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Slider>
        <SlideTitle>訂單資訊</SlideTitle>
        <NoticeFlex>
          <SlideNotice>點此展開</SlideNotice>
          <Icon src={arrow} width='10' />
        </NoticeFlex>
      </Slider>
      <Content>
        <SlideTitle mb='5'>聯絡資訊</SlideTitle>
        <FormGroup>
          <FormInput mb='10' label='姓名' placeholder='王小明' />
          <FormInput mb='10' label='手機號碼' placeholder='0123456789' />
        </FormGroup>
        <SlideTitle mb='5'>寄送資訊</SlideTitle>
        <FormGroup>
          <FlexStart>
            <FormInput mb='10' label='收件者姓名' placeholder='王小明' />
            <FormControlLabel className={classes.root} value="female" control={<Radio color='default' size="small" />} label="與聯絡人相同" />
          </FlexStart>
          <FormInput mb='10' label='收件者手機號碼' placeholder='0912345678' />
          <Address>
            <FormInput label='收件者地址' placeholder='郵遞區號' mb='10' width='78px' height='40px' mr='10' />
            <BaseSelect triangle placeholder='台北市' options={city} width='83px' height='40px' border='#999999' mt='16' mr='10' />
            <BaseSelect triangle placeholder='中正區' options={area} width='83px' height='40px' border='#999999' mt='16' />
          </Address>
          <FormInput placeholder='詳細地址' mb='10' />
        </FormGroup>
      </Content>
    </React.Fragment>
  )
}

export default OrderInfo;