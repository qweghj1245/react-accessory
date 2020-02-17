import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLoginUser } from '../../redux/user/user.selector';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import ProfileContent from '../../components/Profile/Profile';
import ProfileEditContent from '../../components/ProfileEdit/ProfileEdit';

const ProfileHoc = BaseWrapper(ProfileContent);
const ProfileEditHoc = BaseWrapper(ProfileEditContent);

const Profile = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector(selectLoginUser);
  return isEdit ? <ProfileEditHoc user={user} {...props} edit={() => setIsEdit(!isEdit)} /> : <ProfileHoc user={user} {...props} edit={() => setIsEdit(!isEdit)} />
}

export default Profile;