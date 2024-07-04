import React from "react";
import { useState } from "react";

const PlantCard = ({id, name, image, price, handleDelete}) => {
  const [inStock, setInStock] = useState(true)

  const handleStock = () => setInStock(!inStock)

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
