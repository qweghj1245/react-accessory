import React from 'react';

import SideBar from '../../components/BackStage/SideBar/SideBar';
import StageContent from '../../components/BackStage/StageContent/StageContent';
import { Flex } from '../../assets/css/global.style';
import { MoveRight, Wrapper } from './BackStage.style';

const BackStage = ({ location, routes }) => {
  let route;
  let pathSplit = location.pathname.split('/').filter(item => !!item);
  if (pathSplit.length === 3) {
    route = 
      routes.find(item => item.path === location.pathname.replace(pathSplit[2], ':id'))||
      routes.find(item => item.path === location.pathname.replace(pathSplit[2], 'add'));
  } else {
    route = routes.find(item => item.path === location.pathname);
  }
  const Children = route.component;
  return (
    <Flex justify='start' align='start' style={{ position: 'relative', height: '100vh' }}>
      <SideBar />
      <Wrapper>
        <StageContent name={route.name} />
        <MoveRight>
          <Children name={route.name} />
        </MoveRight>
      </Wrapper>
    </Flex>
  )
}

export default BackStage;