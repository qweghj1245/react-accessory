import React from 'react';

import { Wrapper, Head, Group, GroupItem, TextTitle, TextContent } from './Profile.style';
import BaseButton from '../BaseButton/BaseButton';

const Profile = (props) => {
  return (
    <Wrapper>
      <Head url='' />
      <Group>
        <GroupItem>
          <TextTitle>用戶名稱</TextTitle>
          <TextContent>王小明</TextContent>
        </GroupItem>
        <GroupItem>
          <TextTitle>手機號碼</TextTitle>
          <TextContent>未填</TextContent>
        </GroupItem>
        <GroupItem>
          <TextTitle>EMAIL</TextTitle>
          <TextContent>abc123@gmail.com</TextContent>
        </GroupItem>
        <GroupItem mb='50'>
          <TextTitle>地址</TextTitle>
          <TextContent>100 台北市中正區八德路一段1號</TextContent>
        </GroupItem>
      </Group>
      <BaseButton padding='8px 48px' color='light-brown' onClick={props.edit}>修改資料或密碼</BaseButton>
    </Wrapper>
  )
}

export default Profile;