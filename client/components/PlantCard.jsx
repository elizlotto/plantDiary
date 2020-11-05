import React, { useState, useEffect } from 'react';
import './PlantCard.css';

const PlantCard = (props) => {
   const { id, name } = props;
  //console.log(props, 'props')
  return (
    <div className="Plant-card">
      <ul>Plant: {name}</ul>
      <ul>Id: {id}</ul>
    </div>
  );
}

export default PlantCard;