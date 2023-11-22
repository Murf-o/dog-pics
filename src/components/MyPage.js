import MyButton from "./MyButton";
import MyTextField from "./MyTextField";
import { StyledMyPage, StyledPageWrapper } from "./styles/StyledMyPage";
import React, { useState, useEffect } from 'react';

function MyPage(){

  const[imageUrl, setImageUrl] = useState();

  //runs on first render
  useEffect(() =>{
    getNewDog();
  }, [])
  
  const getNewDog = async() =>{
    
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    const mess = await resp.json();
    const url = mess.message;
    setImageUrl(url);
  }

  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const imgHeight = {
    value: height,
    setValue: setHeight
  };

  const imgWidth = {
    value: width,
    setValue: setWidth
  };


  return(
    
    <StyledPageWrapper>
      <StyledMyPage>
        <img src={imageUrl} alt={"dog pic bro"} width={width} height={height} onError={getNewDog} />
        <MyButton getNewDog={getNewDog} />
        <MyTextField labelText={"Width: "} state={imgWidth} />
        <MyTextField labelText={"Height: "} state={imgHeight} />
      </StyledMyPage>
    </StyledPageWrapper>
    
  )
}

export default MyPage;