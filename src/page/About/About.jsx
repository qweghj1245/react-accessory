import React from 'react';

import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';
import { Flex } from '../../assets/css/global.style';
import { Wrapper, SmallBlock, LongBlock, Group, FlexRow, Image, FlexGrid, Container } from './About.style';

import logo from '../../assets/img/About/logo_about_biglogo.svg';
import opi from '../../assets/img/About/pic_about_OPI.svg';
import step from '../../assets/img/About/pic_about_3steps.svg';
import step2 from '../../assets/img/About/pic_about_3steps_2.svg';
import step3 from '../../assets/img/About/pic_about_3steps_3.svg';
import b_step from '../../assets/img/About/pic_about_step1.svg';
import b_step2 from '../../assets/img/About/pic_about_step2.svg';
import b_step3 from '../../assets/img/About/pic_about_step3.svg';
import phoneOpi from '../../assets/img/About/pic_about_OPI_ios.svg';

const About = () => {
  let isWeb = window.innerWidth > 960;
  return (
    <Container dir='column'>
      <Wrapper>
        <FlexRow align='start'>
          <Group mb='20'>
            <Image src={logo} />
          </Group>
          <Flex dir='column' align='start'>
            <Image src={isWeb ? opi : phoneOpi} mb='18' mr='20' />
            <SmallBlock />
          </Flex>
          <Group>
            <SmallBlock mb='12' />
            <LongBlock />
          </Group>
        </FlexRow>
      </Wrapper>
      <FlexRow align='start' mb='30'>
        <FlexGrid dir='column' justify='start' align='start' mr='20'>
          <Image src={step} mb='20' />
          <Image src={step2} mb='20' />
          <Image src={step3} mb='20' />
        </FlexGrid>
        <Image src={b_step} mr='20' />
        <Image src={b_step2} mr='20' />
        <Image src={b_step3} mr='20' />
      </FlexRow>
    </Container>
  )
}

export default BaseWrapper(About);