import React, { useState } from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import ProfileContent from '../../components/Profile/Profile';
import ProfileEditContent from '../../components/ProfileEdit/ProfileEdit';

const ProfileHoc = BaseWrapper(ProfileContent);
const ProfileEditHoc = BaseWrapper(ProfileEditContent);

const Profile = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? <ProfileEditHoc {...props} edit={() => setIsEdit(!isEdit)} /> : <ProfileHoc {...props} edit={() => setIsEdit(!isEdit)} />
}

export default Profile;