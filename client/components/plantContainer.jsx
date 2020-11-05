import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import CreatePlant from './CreatePlant';

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
    //note: must include delete button in this loop & an edit toggle
    return (<PlantCard key={plant._id} id={plant._id} name={plant.name} />)
  });
//note: sum up all of the prices and have a toggle for viewing the cost of your plants
  return (
    <div className="PlantContainer">
    <div>Welcome {user.name}!</div>
     <div className="PlantCard">
        {plants}
     </div>
      <div><CreatePlant email={user.email}/></div>
      <p>Plants coming soon!</p>
    </div>
  );
};

export default PlantContainer;
