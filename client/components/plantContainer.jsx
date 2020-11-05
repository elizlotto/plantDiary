import React, { useState, useEffect } from 'react';

const PlantContainer = () => {
  console.log('inplant container');

  //useEffect for user
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('/user')
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  //useEffect for fetching plant data
  const [allPlants, setAllPlants] = useState({});
//plant container is the redirect after login. 
  //will render a plant card 
  //will also fetch from the plantContainer
  //use user obj to link database entries. 
  return (
    <div className="PlantContainer">
      <div>Welcome {user.name}!</div>
      <p>Plants coming soon!</p>
    </div>
  );
};

export default PlantContainer;
