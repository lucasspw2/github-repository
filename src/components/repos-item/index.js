import React from 'react';
import {Wrapper, WrapperTitle, WrapperFullName, WrapperLink} from './styled';

export default function ReposItem({name, linkToRepo, fullName}) {
 return (
   <Wrapper>
       <WrapperTitle>{name}</WrapperTitle>
       <WrapperFullName>{fullName}</WrapperFullName>
       <WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">{linkToRepo}</WrapperLink>
   </Wrapper>
 );
}