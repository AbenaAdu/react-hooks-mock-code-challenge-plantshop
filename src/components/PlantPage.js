import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plantData, setPlantData] = useState([])
const [searchPlant, setSearchPlant] = useState("")



 useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  .then(data => setPlantData(data))
 }, [])

 function handleAddNewPlant(newPlantObj) {
  const newPlantArray = [...plantData, newPlantObj]
  setPlantData(newPlantArray)
 }
 const filteredPlants = plantData.filter((plant) => {
  if (searchPlant === "") {
    return true 
  } else return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  
 })



  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant}/>
      <Search setSearchPlant={setSearchPlant} />
      <PlantList key={plantData.id} plantData={filteredPlants} />
    </main>
  );
}

export default PlantPage;
