import React from "react";
import { string, object } from "yup";
import {useState} from "react";

// const url = "http://localhost:6001/plants"

const initialState = {
  id: "", 
  name: "", 
  image: "", 
  price: ""
}

const plantSchema = object({
  name: string().required('Name is required!'),
  image: string().required('Image is required!'),
  price: string().required('Price is required!')
})

const NewPlantForm = ({addPlant}) => {
    const [formData, setFormData] = useState(initialState)
    const [error, setError] = useState("");

    const handleChange = ({target: {id, value}}) => {
      setFormData({...formData, [id] : value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      // plantSchema.validate(formData)
      // .then(validFormData => {
        addPlant(formData)
        fetch("http://localhost:6001/plants", {
          method: "POST",
          headers: {
            "Content-Type": "Application/JSON"
          },
          body: JSON.stringify({name: formData.name, image: formData.image, price: formData.price})
        })
        .then(resp => {
          if (!resp.ok) {
            console.log(error)
          }
          return resp.json()
        })
        setFormData(initialState)
      }
    //   })
    //  .catch(validationError => setError(validationError.message))

  return (
    <div className="new-plant-form">
      {error ? <p className="error-message red">{error}</p> : null}
      <h2>New Plant</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" id="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" id="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
