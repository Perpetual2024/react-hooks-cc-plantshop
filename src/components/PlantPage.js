import React,{useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchedPlant,setSearchedPlant]= useState("");
  const [plants, setPlants] = useState([])

  function handleAddPlant(newPlant){
    const newPlants = [...plants, newPlant];
    setSearchedPlant(newPlants);
  }
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
