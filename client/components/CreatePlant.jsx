import React, { useState, useEffect } from 'react';


const CreatePlant = (props) => {
  //console.log(props.email, 'props in createPlant')
  const [input, setInput] = useState({
    user: '',
    email: '',
    plant: '',
    acquired: '',
    status: '',
    price: '',
  });
  //func for plant name
  const handlePlantChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      plant: event.target.value,
    }));
  };
  //func for acquired
  const handleAcquiredChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      acquired: event.target.value,
    }));
  };
  //func for status of plant
  const handleStatusChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      status: event.target.value,
    }));
  };
  //func for price of plant
  const handlePriceChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      price: event.target.value,
    }));
  };
  //func for email of user into state
  const handleEmailChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      email: event.target.value,
    }));
  };
  const handleUserChange = (event) => {
    event.persist();
    setInput((input) => ({
      ...input,
      user: event.target.value,
    }));
  };
  //handle Submit func to send data to db
  const handleSubmit = (event) => {
    // event.preventDefault() <--this line stops the refresh
    fetch('/plant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .catch((err) => console.log(error));
    //reset the state to clear the fields & refetch the data from db
  };
  return (
    <form className="Create-Plant" onSubmit={handleSubmit}>
      <h1>Plant form</h1>
      <input
        type="hidden"
        name="email"
        onChange={handleEmailChange}
        value={(input.email = props.email)}
        required
      />
      <input
        type="hidden"
        name="user"
        onChange={handleUserChange}
        value={(input.user = props.user)}
        required
      />
      <label>Name:</label>
      <input type="text" name="plant" onChange={handlePlantChange} value={input.plant} required />
      <label>Date Acquired/Purchased:</label>
      <input
        type="text"
        name="acquired"
        onChange={handleAcquiredChange}
        value={input.acquired}
        required
      />
      <label>Condition:</label>
      <input
        type="text"
        name="status"
        onChange={handleStatusChange}
        value={input.status}
        required
      />
      <label>Price:</label>
      <input type="text" name="price" onChange={handlePriceChange} value={input.price} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePlant;
