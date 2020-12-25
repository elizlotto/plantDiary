import React, { useState, useEffect } from 'react';
import './PlantCard.css';
import DeletePlant from './DeletePlant';

const PlantCard = (props) => {
  const [editPlant, setEditPlant] = useState(null);
  //if edit button is clicked, set editPlant to true and toggle to show the editPlant component fields.
  
   const { id, name, status, acquired, price, user } = props;
  //add a delete and edit button for each of these. 
  //we will need a state to toggle a view for edit
  return (
    <div className="Plant-card">
      <ul>User {user}</ul> 
      <ul>Plant: {name}</ul>
      <ul>Id: {id}</ul>
      <ul>Status: {status}</ul>
      <ul>Acquired: {acquired}</ul>
      <ul>Price: {price}</ul>
      <ul><button>Update Plant</button></ul>
      <ul>
        <DeletePlant setAllPlants={props.setAllPlants} id={id}/>
      </ul>
    </div>
  );
}

export default PlantCard;