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
  console.log(user.email, 'user')

  //useEffect for fetching plant data
  const [allPlants, setAllPlants] = useState([]);
  useEffect(() => {
    const getPlants = () => {
    fetch('/plant', {})
      .then(res => {
        if (res.status >= 400) throw new Error("Server error!");
        return res.json();
      })
    .then(data => console.log(data, 'data'))
    .then(res => setAllPlants(res))
    .catch(err => console.log(err));
    }
    
    getPlants();

  }, []);
 
  { console.log(allPlants, 'all line 27') }

  return (
   
    <div className="PlantContainer">
    */}
      <div>Welcome {user.name}!</div>
      <p>Plants coming soon!</p>
    </div>
  );
};

export default PlantContainer;
