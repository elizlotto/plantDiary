import React, { useState } from 'react';

//custom hook for create plant form
const usePlantForm = (callback) => {
  //input state
  const [inputs, setInputs] = useState({});

  //handleSubmit to prevent default browser refresh behavior
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback()
  }

  return null;
}