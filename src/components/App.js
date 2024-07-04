import { useState } from "react"
import Header from "./Header";
import PlantPage from "./PlantPage";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div className="app">
      <Toaster />
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
