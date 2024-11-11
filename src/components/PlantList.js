import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";
const baseUrl = "http://localhost:6001/plants"
function PlantList({plants, setPlants, searchPlants}) {

  useEffect(()=>{
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])

  const filteredPlants = plants.reduce((acc, plant) => {
    if (!searchedPlant || plant.name.toLowerCase().includes(searchedPlant.toLowerCase())) {
      acc.push(plant);
    }
    return acc;
  }, []);
  
  function returnedPlants(){
    return filteredPlants.map(plant => <PlantCard key={plant.id} plant={plant}/>)
  }

  return (
    <ul className="cards">{returnedPlants()}</ul>
  );
}

export default PlantList;
