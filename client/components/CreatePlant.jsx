import React, {useState, useEffect} from 'react';
//import usePlantForm from './usePlantForm';

const CreatePlant = (props) => {
  //console.log(props.email, 'props in createPlant')
  const [input, setInput] = useState({
    email : '',
    plant : '',
    acquired : '',
    status : '',
    price : '',
  })
  console.log(input, 'input')
  //const { inputs, handleInputChange, handleSubmit } = usePlantForm();
  // const handleSubmit = (event) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  // };

  const handlePlantChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      plant: event.target.value
    }))
  }

  const handleAcquiredChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      acquired: event.target.value
    }))
  }

  const handleStatusChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      status: event.target.value
    }))
  }

  const handlePriceChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      price: event.target.value
    }))
  }
  const handleEmailChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      email: event.target.value
    }))
  }
  //handle Submit func

  
  const handleSubmit = (event) => {
     event.preventDefault()
    console.log(input, 'input state in submitPlant');
    
}
  return (
    <form className="Create-Plant" onSubmit={handleSubmit}>
      <h1>Plant form</h1>
      <input type="hidden" name="email" onChange={handleEmailChange} value={input.email = props.email} required />
      <label>Name:</label>
      <input type="text" name="plant" onChange={handlePlantChange} value={input.plant} required/>
      <label>Date Acquired/Purchased:</label>
      <input type="text" name="acquired" onChange={handleAcquiredChange} value={input.acquired} required/>
      <label>Condition:</label>
      <input type="text" name="status" onChange={handleStatusChange} value={input.status} required/>
      <label>Price:</label>
      <input type="text" name="price" onChange={handlePriceChange} value={input.price} required/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePlant;