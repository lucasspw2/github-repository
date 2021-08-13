import {createContext, useCallback, useState} from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    hasUser: false,
    loading: false,
    user: {},
    repos: [],
    starred: [],

});

function GithubProvider({children}) {
    const [gitHub, setGitHub] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            avatar_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0
    },
    repos: [],
    starred: []
    });

   
    function getUser(username){  //receber um username do input
        setGitHub((prevState) =>({ 
            ...prevState,
            loading: !prevState.loading
        }));

        api.get(`users/${username}`).then(({data})=> {
            setGitHub((prevState) => ({
                ...prevState,
                hasUser: true,
                
                user:{
                    id: data.id,
                    login: data.login,
                    name: data.name,
                    htmlUrl: data.html_url,
                    avatar_url: data.avatar_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    publicGists: data.public_gists,
                    publicRepos: data.public_repos
                },
            }));
        }).finally(() => {
            setGitHub((prevState) =>({
                ...prevState,
                loading: !prevState.loading
            }));
        }) 
         
    }

    function getUserRepos(username){  
        api.get(`users/${username}/repos`).then(({data})=> {
            setGitHub((prevState) => ({
                ...prevState,
                repos: data,
            }));
        })
    }

        function getUserStarred(username){  
            api.get(`users/${username}/starred`).then(({data})=> {
                setGitHub((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
            })   
         
    };


    const contextValue ={
        gitHub,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };
    
 
    return (
    <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
    ) 
}

export default GithubProvider;