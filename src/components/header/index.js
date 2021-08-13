import React, {useState} from 'react';
import useGitHub from '../../hooks/github-hooks';
import {Input, Button, Container} from './styled';

export default function Header() {
    const {getUser} = useGitHub();
    const [userForSearch, setUserForSearch] = useState('');


 
 function submitGetUser(e){
    if(!userForSearch) return; //validacao se o input veio vazio
    return getUser(userForSearch);
    
     
 }
 
    return (
   <Container>
       <Input onChange={ (e) => setUserForSearch(e.target.value)}/>
       <Button onClick={submitGetUser}>BUSCAR</Button>
   </Container>
 );
}
