import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';

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
  console.log(user.email, 'user line 17');

  //useEffect for fetching plant data
  const [allPlants, setAllPlants] = useState([]);
  console.log(allPlants, 'allplants line 21');
  useEffect(() => {

      fetch('/plant', {})
        .then((res) => {
          if (res.status >= 400) throw new Error('Server error!');
          return res.json();
        })
        .then((data) => {
          console.log(data, 'data')
          setAllPlants(data)
        })
       

  }, []);
  let plants = allPlants.map(plant => {
    <PlantCard id={plant._id} name={plant.name} />
  });

  console.log(allPlants, 'all line 3');
  

  return (
    <div className="PlantContainer">
      <ul>
        {/* {allPlants.map(plant => {
          <PlantCard id={plant._id} name={plant.name} />
        })} */} 
        {/* {plants} */}
        <PlantCard />
       </ul>
      <div>Welcome {user.name}!</div>
      <p>Plants coming soon!</p>
    </div>
  );
};

export default PlantContainer;
