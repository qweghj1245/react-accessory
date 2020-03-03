import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OrderSlider from '../OrderSlider/OrderSlider';
import FormInput from '../../FormInput/FormInput';
import BaseSelect from '../../BaseSelect/BaseSelect';
import { SlideTitle, Content, FormGroup, Address, FlexStart } from './OrderInfo.style';
import { setOrderInfo } from '../../../redux/cart/cart.action';
import { selectLoginUser } from '../../../redux/user/user.selector';
import { cityList } from '../../../lib/taiwan';
import { selectComputeCart } from '../../../redux/cart/cart.selector';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 0,
    marginTop: '14px',
  },
}));

const OrderInfo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orderInfoState = useSelector(state => state.cart.orderInfoState);
  const computeCart = useSelector(selectComputeCart);

  const user = useSelector(selectLoginUser);
  const [checked, setChecked] = useState(false);

  const hashCity = useMemo(() => { // city hash table
    return cityList.reduce((acc, item) => {
      acc[item.CityName] = item.AreaList;
      return acc;
    }, {});
  }, []);
  const city = useMemo(() => { // all city
    return cityList.map(item => {
      return {
        label: item.CityName,
        value: item.CityEngName,
      };
    });
  }, []);
  const area = useMemo(() => { // set after choose city
    if (orderInfoState.recipientCounty) {
      let current = hashCity[orderInfoState.recipientCounty];
      return current.map(item => {
        return {
          ZipCode: item.ZipCode,
          label: item.AreaName,
          value: item.AreaEngName,
        };
      });
    }
    return [];
  }, [hashCity, orderInfoState.recipientCounty]);
  const setArea = (label) => {
    setValue({
      recipientArea: label,
      recipientPostalCode: area.find(item => item.label === label).ZipCode,
    });
  };

  const handleChange = event => {
    let check = event.target.checked;
    setChecked(check);
    setValue({
      recipientPerson: check ? user.name : '',
      recipientPhoneNumber: check ? user.phoneNumber : '',
    });
  };

  const setValue = (({ ...state }) => {
    dispatch(setOrderInfo({
      ...orderInfoState,
      ...state,
    }));
  });

  return (
    <React.Fragment>
      <OrderSlider products={computeCart}/>
      <Content>
        <SlideTitle mb='5'>聯絡資訊</SlideTitle>
        <FormGroup>
          <FormInput
            mb='10'
            label='姓名'
            placeholder='王小明'
            setValue={user.name}
            inputVal={val => setValue({ contactPerson: val })} />
          <FormInput
            mb='10'
            label='手機號碼'
            placeholder='0123456789'
            setValue={user.phoneNumber}
            inputVal={val => setValue({ contactPhoneNumber: val })} />
        </FormGroup>
        <SlideTitle mb='5'>寄送資訊</SlideTitle>
        <FormGroup>
          <FlexStart>
            <FormInput
              mb='10'
              label='收件者姓名'
              placeholder='王小明'
              setValue={orderInfoState.recipientPerson}
              defaultValue={orderInfoState.recipientPerson}
              inputVal={val => setValue({ recipientPerson: val })} />
            <FormControlLabel
              className={classes.root}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="default"
                  value="default"
                />
              }
              label="與聯絡人相同"
            />
          </FlexStart>
          <FormInput
            mb='10'
            label='收件者手機號碼'
            placeholder='0912345678'
            setValue={orderInfoState.recipientPhoneNumber}
            defaultValue={orderInfoState.recipientPhoneNumber}
            inputVal={val => setValue({ recipientPhoneNumber: val })} />
          <Address>
            <FormInput
              label='收件者地址'
              placeholder='郵遞區號'
              mb='10' width='78px'
              height='40px'
              mr='10'
              setValue={orderInfoState.recipientPostalCode}
              defaultValue={orderInfoState.recipientPostalCode}
              inputVal={val => setValue({ recipientPostalCode: val })} />
            <BaseSelect
              triangle
              placeholder='台北市'
              options={city}
              change={label => setValue({ recipientCounty: label })}
              width='83px'
              height='40px'
              border='#999999'
              mt='16'
              mr='10' />
            <BaseSelect
              triangle
              placeholder='中正區'
              options={area}
              change={setArea}
              width='83px'
              height='40px'
              border='#999999'
              mt='16' />
          </Address>
          <FormInput
            placeholder='詳細地址'
            mb='10'
            defaultValue={orderInfoState.recipientAddress}
            inputVal={val => setValue({ recipientAddress: val })} />
        </FormGroup>
      </Content>
    </React.Fragment>
  )
}

export default OrderInfo;