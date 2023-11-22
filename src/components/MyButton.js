import { StyledMyButton } from "./styles/StyledMyButton";


function MyButton({getNewDog}){
  
  return(
    <StyledMyButton onClick={getNewDog}>
      New Pic
    </StyledMyButton>
  )
}

export default MyButton;