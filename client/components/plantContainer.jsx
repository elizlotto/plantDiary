import React, { useState, useEffect } from 'react';

const PlantContainer = () => {
  console.log('inplant container');
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/user')
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  return (
    <div className="PlantContainer">
      <div>Welcome {user.name}!</div>
      <p>Plants coming soon!</p>
    </div>
  );
};

export default PlantContainer;
