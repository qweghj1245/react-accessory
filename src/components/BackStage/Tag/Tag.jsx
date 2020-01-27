import React from 'react';

import { TagText } from "./Tag.style";

const Tag = ({ children, ...styleProps }) => {
  return (
    <TagText {...styleProps}>{children}</TagText>
  )
}

export default Tag;