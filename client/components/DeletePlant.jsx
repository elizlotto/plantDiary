import React, { useState, useEffect } from 'react';

const DeletePlant = (props) => {
  const deleteHandleSubmit = (event) => {
    event.preventDefault();
    const _id = event.target.value;
    console.log('id', _id);
    fetch(`/plant/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        res.json();
      })
      .catch((err) => console.log(error));
  };

  return (
    <div>
      <button value={props.id} onClick={(e) => deleteHandleSubmit(e)}>
        Hello Delete {props.id}
      </button>
    </div>
  );
};

export default DeletePlant;
