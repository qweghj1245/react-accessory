import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStart } from '../../redux/user/user.action';
import { Wrap, Wrapper, Head, HeadSetting, Address, Divide, Texture } from './ProfileEdit.style';
import BaseButton from '../BaseButton/BaseButton';
import FormInput from '../FormInput/FormInput';
import BaseSelect from '../BaseSelect/BaseSelect';
import { city } from '../../lib/city';
import setting from '../../assets/img/Icon/Icon_member_settings.svg';

const Profile = ({ edit, user }) => {
  const dispatch = useDispatch();
  const username = useRef(user.name);
  const phoneNumber = useRef(user.phoneNumber || '');
  const email = useRef(user.email);
  const postalCode = useRef(user.postalCode || '');
  const address = useRef(user.address || '');
  const [place, setPlace] = useState({
    county: user.county || '臺北市',
    area: user.area || '',
    areaList: [],
  });

  const cityMapping = () => {
    return city.reduce((acc, item) => {
      acc.push({
        value: item.CityEngName,
        label: item.CityName,
      });
      return acc;
    }, []);
  };

  const townMapping = () => {
    return city.filter(item => item.CityName === place.county).reduce((acc, item) => {
      let count = 0;
      item.AreaList.forEach(d => {
        count++;
        acc.push({
          label: d.AreaName,
          value: d.ZipCode + count,
        });
      });
      return acc;
    }, []);
  }

  const setCounty = (e) => {
    let list = city.filter(item => item.CityName === e).reduce((acc, item) => {
      let count = 0;
      item.AreaList.forEach(d => {
        count++;
        acc.push({
          label: d.AreaName,
          value: d.ZipCode + count,
        });
      })
      return acc;
    }, []);
    setPlace({
      ...place,
      county: e,
      areaList: list,
    });
  }
  const setArea = (e) => {
    setPlace({
      ...place,
      area: e,
    });
  }

  const updateUser = () => {
    dispatch(updateStart({
      name: username.current,
      phoneNumber: phoneNumber.current,
      postalCode: postalCode.current,
      address: address.current,
      county: place.county,
      area: place.area,
    }));
    edit();
  }

  return (
    <Wrapper>
      <Head url={user.photo || ''}>
        <HeadSetting src={setting} width='22' />
      </Head>
      <Wrap>
        <Texture>修改資料</Texture>
        <FormInput label='用戶名稱' placeholder='王小明' mb='10' defaultValue={username.current} inputVal={(val) => username.current = val} />
      </Wrap>
      <FormInput label='手機號碼' placeholder='0912345678(選填)' mb='10' defaultValue={phoneNumber.current} inputVal={(val) => phoneNumber.current = val} />
      <FormInput label='EMAIL' placeholder='abc123@gmail.com' mb='10' defaultValue={email.current} />
      <Address>
        <FormInput label='地址' placeholder='郵遞區號' mb='10' width='78px' height='40px' mr='10' defaultValue={postalCode.current} inputVal={(val) => postalCode.current = val} />
        <BaseSelect change={setCounty} triangle placeholder='台北市' options={cityMapping()} defaultV={place.county} width='83px' height='40px' border='#999999' mt='23' mr='10' mb='9' />
        <BaseSelect change={setArea} triangle placeholder='中正區' options={place.areaList.length ? place.areaList 
        : townMapping()} defaultV={place.area} width='83px' height='40px' border='#999999' mt='23' mb='9' />
      </Address>
      <FormInput placeholder='詳細地址(選填)' mb='10' defaultValue={address.current} inputVal={(val) => address.current = val} />
      <Divide />
      <Wrap>
        <Texture>修改密碼</Texture>
        <FormInput label='舊密碼' placeholder='舊密碼' mb='10' />
      </Wrap>
      <FormInput label='新密碼' placeholder='新密碼' mb='10' />
      <FormInput label='密碼確認' placeholder='密碼確認' mb='30' />
      <BaseButton padding='8px 48px' color='light-brown' onClick={updateUser}>儲存</BaseButton>
    </Wrapper>
  )
}

export default Profile;