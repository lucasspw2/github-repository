import React, { useEffect, useState } from 'react';
import {WrapperTab, WrapperTabList, WrapperTabPanel, WrapperTabs, WrapperList} from './styled';
import ReposItem from '../repos-item';
import useGitHub from '../../hooks/github-hooks';


export default function Repos() {
 
  const {gitHub, getUserRepos, getUserStarred} = useGitHub();
  const [reposUser, setReposUser] = useState(false)
  
  useEffect(() =>{
    if(!!gitHub.user.login){
      getUserRepos(gitHub.user.login);
      getUserStarred(gitHub.user.login);
    }

    setReposUser(!!gitHub.repos)

  }, [gitHub.user.login]);
  
  return (
    
    <>
    {reposUser ? (
   <WrapperTabs 
   selectedTabClassName="is-selected"
   selectedTabPanelClassName="is-selected">
     <WrapperTabList>
       <WrapperTab>Repositories</WrapperTab>
       <WrapperTab>Starred</WrapperTab>
     </WrapperTabList>
     <WrapperTabPanel>
       <WrapperList>
       {gitHub.repos.map((item) => (
         <ReposItem
         key={item.id}
         name={item.full_name}
         linkToRepo={item.full_name}
         fullName={item.full_name}
         />
       ))}
       </WrapperList>
       </WrapperTabPanel>
     
     <WrapperTabPanel>
       <WrapperList>
     {gitHub.starred.map((item) => (
         <ReposItem
         key={item.id}
         name={item.name}
         linkToRepo={item.html_url}
         fullName={item.full_name}
         />
       ))}
       </WrapperList>
       </WrapperTabPanel>
   </WrapperTabs>
  ):( 
  <> </>
  )}
   </>
    
 );
}