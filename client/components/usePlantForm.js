import React, { useState } from 'react';

//custom hook for create plant form
const usePlantForm = () => {
  //input state which will be updated when the user inputs information in the plant form
  const initialInput = {
    name,
    status,
  };

  const [inputs, setInputs] = useState(initialInput);
  
  console.log(inputs, 'input state ln 11')

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default usePlantForm;
