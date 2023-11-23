import React from "react"
import {useEffect, useState} from "react";
import MyButton from "./MyButton";
import MyTextField from "./MyTextField";

function DogPage() {

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

  return (
  <>      
    <img src={imageUrl} alt={"dog pic bro"} width={width} height={height} onError={getNewDog} />
    <MyButton getNewDog={getNewDog} />
    <MyTextField labelText={"Width: "} state={imgWidth} />
    <MyTextField labelText={"Height: "} state={imgHeight} />
  </>);
}
export default DogPage;