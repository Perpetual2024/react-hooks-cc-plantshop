import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchPlants}) {
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
