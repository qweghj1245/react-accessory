import React from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import ProfileContent from '../../components/Profile/Profile';

const ProfileHoc = BaseWrapper(ProfileContent);

const Profile = (props) => {
  return <ProfileHoc {...props} />
}

export default Profile;