import React, { useState, useEffect } from 'react';


const DeletePlant = (props) => {

  const handleSubmit = (event) => {
    // event.preventDefault() <--this line stops the refresh
    const _id = event.target.value;
    console.log('id', _id)
    fetch(`/plant/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res, 'response successful?'))
      .catch((err) => console.log(error));

  };

  return (
    <div><button value={props.id} onClick={(e) => handleSubmit(e)}>Hello Delete {props.id}</button></div>
  )
}

export default DeletePlant;