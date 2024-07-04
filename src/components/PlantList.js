import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({plants, searchQuery, handleDelete}) => {
  
  const finalPlants = plants
  .filter(plant => {
    return (plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
  })
  
  const renderPlants = () => {
    return finalPlants.map(plant => (<PlantCard key={plant.id} {...plant} handleDelete={handleDelete}/>))
  }
        

  return (
    <ul className="cards">{renderPlants()}</ul>
  );
}

export default PlantList;
