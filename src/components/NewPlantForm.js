import React ,{useState}from "react";


function NewPlantForm({handleAddPlant}) {
const [formData, setFormData] = useState({name:"", image: "", price: 0 });

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value });

  }

function handleSubmit(event) {
  event.preventDefault();
  const newPlant = {
    name: formData.name,
    image: formData.image,
    price: formData.price.toString()  // Convert price to string, as per test expectations
  }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant)
      .then(res => res.json())
    .then(plant => handleAddPlant(plant))

    });
  
  };
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
