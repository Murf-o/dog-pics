
import { StyledDogPage, StyledPageWrapper } from "./styles/StyledMyPage";
import React, { useState, useEffect } from 'react';
import DogPage from "./DogPage";
import LoginPage from "./LoginPage";
import { StyledLoginPage } from "./styles/StyledLoginPage";

function MyPage(){

  const [authenticated, setAuthenticated] = useState(false);

  return(
    
    <StyledPageWrapper>
      {authenticated ? 
      <StyledDogPage>
        <DogPage />
      </StyledDogPage>

      : <StyledLoginPage>
          <LoginPage setAuthenticated={setAuthenticated}/>
        </StyledLoginPage>}
      
      
    </StyledPageWrapper>
    
  )
}



  export default MyPage;