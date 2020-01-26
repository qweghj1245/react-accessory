import React from 'react';

import SideBar from '../../components/BackStage/SideBar/SideBar';
import StageContent from '../../components/BackStage/StageContent/StageContent';
import { Flex } from '../../assets/css/global.style';
import { MoveRight, Wrapper } from './BackStage.style';

const BackStage = ({ location, routes }) => {
  const route = routes.find(item => item.path === location.pathname);
  const Children = route.component;
  return (
    <Flex justify='start' align='start' style={{ position: 'relative', height: '100vh' }}>
      <SideBar />
      <Wrapper>
        <StageContent />
        <MoveRight>
          <Children name={route.name} />
        </MoveRight>
      </Wrapper>
    </Flex>
  )
}

export default BackStage;