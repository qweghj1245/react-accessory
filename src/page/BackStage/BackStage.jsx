import React, { useState, useEffect } from 'react';

import SideBar from '../../components/BackStage/SideBar/SideBar';
import StageContent from '../../components/BackStage/StageContent/StageContent';
import { Flex, BaseWrapper } from '../../assets/css/global.style';
import { MoveRight } from './BackStage.style';

const BackStage = ({ location, routes }) => {
  const route = routes.find(item => item.path === location.pathname);
  const Children = route.component;
  const [rightContent, setRightContent] = useState(null);
  const [height, setHeight] = useState('100vh');
  useEffect(() => {
    if (rightContent) {
      console.log(getComputedStyle(rightContent).height);
      setHeight(getComputedStyle(rightContent).height);
    }  
  }, [rightContent]);
  return (
    <Flex justify='start' align='start'>
      <SideBar height={height}/>
      <BaseWrapper ref={dom => setRightContent(dom)}>
        <StageContent />
        <MoveRight>
          <Children name={route.name}/>
        </MoveRight>
      </BaseWrapper>
    </Flex>
  )
}

export default BackStage;