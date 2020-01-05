import React from 'react';

import { Wrap, Wrapper, Head, HeadSetting, Address, Divide, Texture } from './ProfileEdit.style';
import BaseButton from '../BaseButton/BaseButton';
import FormInput from '../FormInput/FormInput';
import BaseSelect from '../BaseSelect/BaseSelect';

import setting from '../../assets/img/Icon/Icon_member_settings.svg';

const Profile = (props) => {
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
  return (
    <Wrapper>
      <Head url=''>
        <HeadSetting src={setting} width='22' />
      </Head>
      <Wrap>
        <Texture>修改資料</Texture>
        <FormInput label='用戶名稱' placeholder='王小明' mb='10' />
      </Wrap>
      <FormInput label='手機號碼' placeholder='0912345678(選填)' mb='10' />
      <FormInput label='EMAIL' placeholder='abc123@gmail.com' mb='10' />
      <Address>
        <FormInput label='地址' placeholder='郵遞區號' mb='10' width='78px' height='40px' mr='10' />
        <BaseSelect triangle placeholder='台北市' options={city} width='83px' height='40px' border='#999999' mt='16' mr='10' />
        <BaseSelect triangle placeholder='中正區' options={area} width='83px' height='40px' border='#999999' mt='16' />
      </Address>
      <FormInput placeholder='詳細地址(選填)' mb='10' />
      <Divide />
      <Wrap>
        <Texture>修改密碼</Texture>
        <FormInput label='舊密碼' placeholder='舊密碼' mb='10' />
      </Wrap>
      <FormInput label='新密碼' placeholder='新密碼' mb='10' />
      <FormInput label='密碼確認' placeholder='密碼確認' mb='30' />
      <BaseButton padding='8px 48px' color='light-brown' onClick={props.edit}>儲存</BaseButton>
    </Wrapper>
  )
}

export default Profile;