import React from 'react';

import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';
import { Flex, ImageWrapper } from '../../assets/css/global.style';
import { Wrapper, SmallBlock, LongBlock, Group } from './About.style';

import logo from '../../assets/img/About/logo_about_biglogo.svg';
import opi from '../../assets/img/About/pic_about_OPI.svg';
import step from '../../assets/img/About/pic_about_3steps.svg';
import step2 from '../../assets/img/About/pic_about_3steps_2.svg';
import step3 from '../../assets/img/About/pic_about_3steps_3.svg';
import b_step from '../../assets/img/About/pic_about_step1.svg';
import b_step2 from '../../assets/img/About/pic_about_step2.svg';
import b_step3 from '../../assets/img/About/pic_about_step3.svg';

const About = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Flex align='start'>
          <Group>
            <ImageWrapper src={logo} />
          </Group>
          <Flex dir='column' align='start'>
            <ImageWrapper src={opi} mb='18' mr='20' />
            <SmallBlock />
          </Flex>
          <Group>
            <SmallBlock mb='12' />
            <LongBlock />
          </Group>
        </Flex>
      </Wrapper>
      <Flex align='start' mb='156'>
        <Flex dir='column' justify='start' align='start' mr='20'>
          <ImageWrapper src={step} mb='20' />
          <ImageWrapper src={step2} mb='20' />
          <ImageWrapper src={step3} mb='20' />
        </Flex>
        <ImageWrapper src={b_step} mr='20' />
        <ImageWrapper src={b_step2} mr='20' />
        <ImageWrapper src={b_step3} mr='20' />
      </Flex>
    </React.Fragment>
  )
}

export default BaseWrapper(About);