import React, {useEffect} from "react";
import PlantCard from "./PlantCard";
function PlantList({plants, setPlants, searchedPlant}) {

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [setPlants])

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
