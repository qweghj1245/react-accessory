import React from 'react';

import { Wrapper, Input, SearchIcon } from './Search.style';

import searchIcon from '../../../assets/img/Icon/Icon_map-search.svg';

const Search = ({ placeholder, right, ...styleProps }) => {
  return (
    <Wrapper>
      <Input {...styleProps} placeholder={placeholder ? placeholder : '搜尋'} />
      <SearchIcon src={searchIcon} right={right}/>
    </Wrapper>
  )
}

export default Search;