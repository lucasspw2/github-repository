
import {useContext} from 'react';
import { GithubContext } from '../providers/github-provider';

export default function useGitHub() {
 
 const {gitHub, getUser, getUserRepos, getUserStarred} = useContext(GithubContext);
    return {gitHub, getUser, getUserRepos, getUserStarred};
}