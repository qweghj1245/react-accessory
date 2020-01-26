import React from 'react';

import { Wrapper, Input, SearchIcon } from './Search.style';

import searchIcon from '../../../assets/img/Icon/Icon_map-search.svg';

const Search = ({ ...styleProps }) => {
  return (
    <Wrapper>
      <Input {...styleProps} placeholder='搜尋' />
      <SearchIcon src={searchIcon} />
    </Wrapper>
  )
}

export default Search;