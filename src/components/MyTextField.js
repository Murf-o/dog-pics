import {React, useState} from "react"

function MyTextField({labelText, state}){

  

  const handleChange = (e) =>{
    const value = e.target.value
    state.setValue(value)
    
  }

  return (
    <label>
      {labelText}
      <input type="number" name="value" value={state.value} onChange={handleChange}/>
    </label>
  )
}

export default MyTextField;