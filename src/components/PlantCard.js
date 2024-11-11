import React, {useState} from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true);

  function handleClick(){
    setInStock(!inStock);
  }
  return (
    <li className="card" data-testid="plant-item" key={plant.id} >
      <img src={plant.img} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
