import React from 'react';
//import useCustomHook from './useCustomForm';

const CreatePlant = (props) => {
console.log(props, 'props in createPlant')
  return (
    <form className="Create-Plant">
      <h1>Plant form</h1>
      <label>Name:</label>
      <input type="text" name="name" />
      <label>Date Acquired/Purchased:</label>
      <input type="text" name="acquired" />
      <label>Condition:</label>
      <input type="text" name="status" />
      <label>Price:</label>
      <input type="text" name="price" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePlant;