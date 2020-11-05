import React, { useState, useEffect } from 'react';
import './PlantCard.css';

const PlantCard = (props) => {
  console.log('in plant card')
   const { id, name } = props;
  console.log(props, 'props')
  return (
    <div className="Plant-card">
      <ul>Plant: {name}</ul>
      <ul>Id: {id}</ul>
    </div>
  );
}

export default PlantCard;