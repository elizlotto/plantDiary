import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import CreatePlant from './CreatePlant';

const PlantContainer = () => {
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
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch('/plant', {})
      .then((res) => {
        if (res.status >= 400) throw new Error('Server error!');
        return res.json();
      })
      .then((data) => {
        setAllPlants(data);
      });
  }, []);
  let plants = allPlants.map((plant) => {
    //note: must include delete button in this loop & an edit toggle
    return <PlantCard key={plant._id} user={plant.user} id={plant._id} name={plant.plant} price={plant.price} status={plant.status} acquired={plant.acquired} />;
  });
  //note: sum up all of the prices and have a toggle for viewing the cost of your plants
  return (
    <div className="PlantContainer">
      <div>Welcome {user.name} <img src={user.picture}></img>!</div>
      <div className="PlantCard">{plants}</div>
      {!allPlants.length && <h2 style={{ color: 'green' }}>Bummer, you don't have any plants yet! Add a plant to get started! </h2>}
      <div>
        <CreatePlant user={user.name} email={user.email} />
      </div>
     </div>
  );
};

export default PlantContainer;
