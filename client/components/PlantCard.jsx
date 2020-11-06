import React, { useState, useEffect } from 'react';
import './PlantCard.css';

const PlantCard = (props) => {
   const { id, name, status, acquired, price } = props;
  //console.log(props, 'props')
  return (
    <div className="Plant-card">
      <ul>Plant: {name}</ul>
      <ul>Id: {id}</ul>
      <ul>Status: {status}</ul>
      <ul>Acquired: {acquired}</ul>
      <ul>Price: {price}</ul>
    </div>
  );
}

export default PlantCard;