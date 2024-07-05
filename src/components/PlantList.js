import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({plants, searchQuery, handleDelete}) => {
  
  const finalPlants = plants
  .filter(plant => {
    return (plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
  })
  
  // create a fxn that is dynamic, so create a new variable and pass into it
  // const displayNewPlant = plants
      // .filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase())) ???
      // .map???
//   const renderPlants = (displayNewPlants) => (<PlantCard key={plant.id} {...plant} handleDelete={handleDelete}/>))

  const renderPlants = () => {
    return finalPlants.map(plant => (<PlantCard key={plant.id} {...plant} handleDelete={handleDelete}/>))
  }
        

  return (
    <ul className="cards">{renderPlants()}</ul>
  );
}

export default PlantList;
