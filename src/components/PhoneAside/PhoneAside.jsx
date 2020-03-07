import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Left, Right, Head, Info, Section, Type } from './PhoneAside.style';
import { ImageWrapper } from '../../assets/css/global.style';
import Close from '../../assets/img/Aside/Icon_ios_menu_x.svg';
import BaseHead from '../../assets/img/Aside/Icon_ios_user.svg';
import gsap, { Power4 } from 'gsap';
import { selectLoginUser } from '../../redux/user/user.selector';
import { filterProductsStart } from '../../redux/product/product.action';

const PhoneAside = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoginUser);

  /* aside 收合*/
  const wrapper = React.createRef();
  let currentToggle = false;
  const toggleSlide = () => {
    currentToggle = !currentToggle;
    gsap.to(wrapper.current, {
      height: currentToggle ? 'auto' : 0,
      opacity: currentToggle ? 1 : 0,
      visibility: currentToggle ? 'visible' : 'hidden',
      ease: Power4.easeInOut,
      duration: .3,
    });
  }

  /* touch event*/
  let startX = null;
  const touchStart = (event) => {
    if (event.touches.length === 1) {
      startX = event.touches[0].pageX;
      ref.current.style.transitionDuration = '0s';
    }
  }
  const touchMove = (event) => {
    if (event.touches.length === 1) {
      let offsetX = event.touches[0].pageX - startX;
      if (offsetX > 0) return;
      ref.current.style.left = `${offsetX}px`;
    }
  }
  const touchEnd = (event) => {
    if (event.changedTouches.length === 1) {
      let offsetX = event.changedTouches[0].pageX - startX;
      if (offsetX > 0) return;
      if (Math.abs(event.changedTouches[0].pageX - startX) > window.innerWidth / 3) {
        resetStyle();
      } else {
        ref.current.style.left = `0px`;
        ref.current.style.transitionDuration = '.2s';
      }
    }
  }

  /* redirect */
  const setFilterType = type => {
    props.history.push('/products');
    dispatch(filterProductsStart(type));
    resetStyle();
  }
  const goRouter = (route) => {
    props.history.push(route);
    resetStyle();
  }

  /* reset */
  const resetStyle = () => {
    ref.current.style.left = `-${window.innerWidth}px`;
    ref.current.style.transitionDuration = '.2s';
  }

  return (
    <Wrapper ref={ref} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
      <Left>
        <Head src={user ? user.photo : BaseHead} />
        <Info onClick={() => goRouter('/login')}>{user ? user.name : '登入/註冊'}</Info>
        <Section onClick={toggleSlide}>商品類別 +</Section>
        <div ref={wrapper} style={{ height: 0, opacity: 0, visibility: 'hidden' }}>
          <Type onClick={() => setFilterType('')}>全部商品</Type>
          <Type onClick={() => setFilterType('paper')}>紙製品</Type>
          <Type onClick={() => setFilterType('phoneAcc')}>手機配件</Type>
          <Type onClick={() => setFilterType('bag')}>包包提袋</Type>
          <Type onClick={() => setFilterType('others')}>其他</Type>
        </div>
        <Section onClick={() => goRouter('/about')}>關於我們</Section>
        <Section onClick={() => goRouter('/shopping_notes')}>購物須知</Section>
      </Left>
      <Right onClick={props.close}>
        <ImageWrapper src={Close} />
      </Right>
    </Wrapper>
  );
});

export default PhoneAside;