import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { updateStart, changePasswordStart } from '../../redux/user/user.action';
import { Wrap, Wrapper, Head, HeadSetting, Address, Divide, Texture } from './ProfileEdit.style';
import BaseButton from '../BaseButton/BaseButton';
import FormInput from '../FormInput/FormInput';
import BaseSelect from '../BaseSelect/BaseSelect';
import { city } from '../../lib/city';
import setting from '../../assets/img/Icon/Icon_member_settings.svg';
import { selectLoginUser } from "../../redux/user/user.selector";
import { uploadImage } from '../../lib/aws';
import { putImage } from '../../lib/api';
const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const oldPassword = useRef('');
  const password = useRef('');
  const passwordConfirm = useRef('');
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
  const file = useRef(null);
  const loginUser = useSelector(selectLoginUser);
  const status = useSelector(state => state.user.updateStatus);

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
  const setHeadImage = (e) => {
    file.current = e.target.files;
    if (file.current.length) {
      uploadImage(user._id, (config) => {
        putImage(config.url, file.current[0]).then(() => {
          callUpdate(`${process.env.REACT_APP_IMAGE_BUCKET_URL}${config.key}`);
        });
      });
    }
  }

  const callUpdate = (url) => {
    dispatch(updateStart({
      name: username.current,
      phoneNumber: phoneNumber.current,
      postalCode: postalCode.current,
      address: address.current,
      county: place.county,
      area: place.area,
      photo: url,
    }));
  }

  const callChange = () => {
    if (!oldPassword.current) return alert.error('請輸入舊密碼');
    if (!password.current) return alert.error('請輸入新密碼');
    if (!passwordConfirm.current) return alert.error('請確認新密碼');
    if (password.current!==passwordConfirm.current) return alert.error('密碼不一致');
    dispatch(changePasswordStart({
      oldPassword: oldPassword.current,
      password: password.current,
      passwordConfirm: passwordConfirm.current,
    }));
  }

  useEffect(() => {
    if (status === 'user') {
      alert.success('儲存成功！');
    } else if (status === 'password') {
      alert.success('更新成功！');
    } else if (status === 'error') {
      alert.error('更新失敗！');
    }
  }, [loginUser, alert, status]);

  return (
    <Wrapper>
      <Head url={user.photo}>
        <HeadSetting src={setting} />
        <input type="file" accept="image/*" onChange={setHeadImage} />
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
      <BaseButton padding='8px 48px' mt='16' color='light-brown' onClick={callUpdate}>儲存</BaseButton>
      {
        user.userSource === 'local' ?
          <React.Fragment>
            <Divide />
            <Wrap>
              <Texture>修改密碼</Texture>
              <FormInput type='password' label='舊密碼' placeholder='舊密碼' mb='10' defaultValue={oldPassword.current} inputVal={(val) => oldPassword.current = val} />
            </Wrap>
            <FormInput type='password' label='新密碼' placeholder='新密碼' mb='10' defaultValue={password.current} inputVal={(val) => password.current = val} />
            <FormInput type='password' label='密碼確認' placeholder='密碼確認' mb='30' defaultValue={passwordConfirm.current} inputVal={(val) => passwordConfirm.current = val} />
            <BaseButton padding='8px 48px' color='light-brown' onClick={callChange}>更新密碼</BaseButton>
          </React.Fragment> : null
      }
    </Wrapper>
  )
}

export default Profile;