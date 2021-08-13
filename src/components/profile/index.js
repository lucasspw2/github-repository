import React from 'react';
import {Wrapper, WrapperInfoUser, WrapperStatus, WrapperUserName, WrapperImg} from './styled';
import useGitHub from '../../hooks/github-hooks';
export default function Profile() {
 
    const {gitHub} = useGitHub();

    return (
    <Wrapper>
        <WrapperImg 
        src={gitHub.user.avatar_url} 
        alt="imagem avatar"/>
        <WrapperInfoUser>
        
        <div>
             <h1>{gitHub.user.name}</h1>
             <WrapperUserName>
                 <h3>username: </h3>
                 <a href={gitHub.user.htmlUrl} target="_blank" rel="noreferrer">
                    {gitHub.user.login}
                 </a>
             </WrapperUserName>
             <WrapperUserName>
                 <h3>Company: </h3>
                 <span>{gitHub.user.company}</span>
             </WrapperUserName>
             <WrapperUserName>
                 <h3>Location: </h3>
                 <span>{gitHub.user.location}</span>
             </WrapperUserName>
             <WrapperUserName>
                 <h3>Blog: </h3>
                 <a href={gitHub.user.blog}>
                     {gitHub.user.blog}
                 </a>
             </WrapperUserName>
        </div>
            <WrapperStatus>
                <div>
                    <h4>Followers</h4>
                    <span>{gitHub.user.followers}</span>
                </div>
                <div>
                    <h4>followings</h4>
                    <span>{gitHub.user.following}</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{gitHub.user.publicGists}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{gitHub.user.publicRepos}</span>
                </div>
            </WrapperStatus>
        </WrapperInfoUser>
    </Wrapper> 
      
      
 );
}