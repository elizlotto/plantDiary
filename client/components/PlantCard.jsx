import React, { useState, useEffect } from 'react';
import './PlantCard.css';

const PlantCard = (props) => {
   const { id, name, status, acquired, price, user } = props;
  //console.log(props, 'props')
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
    </div>
  );
}

export default PlantCard;