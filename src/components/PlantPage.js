import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

import toast, { Toaster } from 'react-hot-toast';

const PlantPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    (() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(setPlants)
    .catch(err => toast.error(`${err.name}: ${err.message}`))
  })()
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const addPlant = (newPlant) => {
    setPlants(currentPlants => {
      const lastPlantArray = currentPlants.slice(-1)
      const id = lastPlantArray.length ? Number(lastPlantArray[0].id) + 1 : uuidv4()
      return [...currentPlants, { ...newPlant, id }]
    })
  }

  const handleDelete = (id) => {
    setPlants(setPlants(current => current.filter(plant => plant.id !== id)))
  }

  return (
    <main>
      <div id="toast-notification"><Toaster /></div>
      <NewPlantForm addPlant={addPlant} />
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <PlantList plants={plants} searchQuery={searchQuery} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
