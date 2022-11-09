import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData }) {
  
  const eachPlant = plantData.map(plant => {
    return <PlantCard 
    key={plant.id}
    plant={plant}
    />
  })
  return (
    <ul className="cards">{eachPlant}</ul>
  );
}

export default PlantList;
