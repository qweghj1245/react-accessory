import React from 'react';
import { Wrapper, Head, Group, GroupItem, TextTitle, TextContent } from './Profile.style';
import { Skeleton } from '@material-ui/lab';
import BaseButton from '../BaseButton/BaseButton';

const Profile = ({ edit, user }) => {
  return (
    <Wrapper>
      {
        user ?
          <React.Fragment>
            <Head url={user.photo || ''} />
            <Group>
              <GroupItem>
                <TextTitle>用戶名稱</TextTitle>
                <TextContent>{user.name}</TextContent>
              </GroupItem>
              <GroupItem>
                <TextTitle>手機號碼</TextTitle>
                <TextContent>{user.phoneNumber || '未填'}</TextContent>
              </GroupItem>
              <GroupItem>
                <TextTitle>EMAIL</TextTitle>
                <TextContent>{user.email}</TextContent>
              </GroupItem>
              <GroupItem mb='50'>
                <TextTitle>地址</TextTitle>
                <TextContent>{user.address ? `${user.postalCode}${user.county}${user.area}${user.address}` : '未填'}</TextContent>
              </GroupItem>
            </Group>
            <BaseButton padding='8px 48px' color='light-brown' onClick={edit}>修改資料或密碼</BaseButton>
          </React.Fragment>
          :
          <Wrapper>
            <Skeleton variant="circle" width={100} height={100} style={{ marginBottom: '50px', marginTop: '50px' }} />
            <Skeleton style={{ 'margin': '0 auto', width: 300 }} height={30} />
            <Skeleton style={{ 'margin': '0 auto', width: 300 }} height={30} />
            <Skeleton style={{ 'margin': '0 auto', width: 300 }} height={30} />
            <Skeleton style={{ 'margin': '0 auto', width: 300 }} height={30} />
            <Skeleton style={{ 'margin': '0 auto', width: 300 }} height={30} />
          </Wrapper>
      }
    </Wrapper>
  )
}

export default Profile;