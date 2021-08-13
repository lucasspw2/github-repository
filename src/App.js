import Layout from "./components/layout";
import Profile from "./components/profile";

import Repos from "./components/repos";

import useGitHub from "./hooks/github-hooks";
import NoSearch from "./components/nosearch";


function App() {
  const {gitHub} = useGitHub();

  return (  
          <Layout >
            {gitHub.hasUser ? (
            <> 
               {gitHub.loading  ? (
                <p>Loading...</p> 
            ) : (
              <>
                <Profile/>
                <Repos />
              </>
            )}
            </>
            ) : ( 
            <NoSearch /> 
            
            )}
          </Layout>
  );
}           

export default App;
