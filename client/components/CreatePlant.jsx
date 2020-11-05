import React from 'react';
import usePlantForm from './usePlantForm';

const CreatePlant = (props) => {
  console.log(props.email, 'props in createPlant')

  const { inputs, handleInputChange, handleSubmit } = usePlantForm();
  
  return (
    <form className="Create-Plant" onChange={handleSubmit}>
      <h1>Plant form</h1>
      <input type="hidden" name="email" onChange={handleInputChange} value={inputs.email = props.email} required />
      <label>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required/>
      <label>Date Acquired/Purchased:</label>
      <input type="text" name="acquired" onChange={handleInputChange} value={inputs.acquired} required/>
      <label>Condition:</label>
      <input type="text" name="status" onChange={handleInputChange} value={inputs.status} required/>
      <label>Price:</label>
      <input type="text" name="price" onChange={handleInputChange} value={inputs.price} required/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePlant;