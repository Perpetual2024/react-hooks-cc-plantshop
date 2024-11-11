import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";
const baseUrl = "http://localhost:6001/plants"
function PlantList({plants, setPlants, searchPlants}) {

  useEffect(()=>{
    fetch(baseUrl)
  })
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
