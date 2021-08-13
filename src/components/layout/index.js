import React from 'react';
import {WrapperLayout} from './styled';
import Header from '../header';

export default function Layout({children}) {
      
      return (
       <WrapperLayout>
        <Header />
        {children}
       </WrapperLayout>
  
 );
}