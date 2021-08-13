import React from 'react';
import App from './App';
import GithubProvider from './providers/github-provider';
import { ResetCss } from './global/reset';

export default function Providers() {
 return (
   <main>
       <GithubProvider>
        <ResetCss />
        <App />
        </GithubProvider>
   </main>
 );
}