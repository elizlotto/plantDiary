import React, { useState, useEffect } from 'react';

const PlantCard = (props) => {
  console.log('in plant card')
  // const { id, name } = this.props;
  console.log(props, 'props')
  return (
    <div className="Plant-Card">
      {/* <ul>Plant: {name}</ul> */}
      <li>More info here</li>
    </div>
  );
}

export default PlantCard;