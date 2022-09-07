import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from './Carousel'


const Details = () => {
  const [loading,setLoading] = useState(true)
  const [name,setName] = useState('')
  const [animal, setAnimal] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breed, setBreed] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const {id} = useParams();

  useEffect(() =>{
    detailsFetch()
  }, [])

  async function detailsFetch(){
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    const json = await res.json()
    setLoading(false)
    setName(json.pets[0].name)
    setAnimal(json.pets[0].animal)
    setCity(json.pets[0].city)
    setState(json.pets[0].state)
    setBreed(json.pets[0].breed)
    setDesc(json.pets[0].description)
    setImages(json.pets[0].images)
  }

  return (
    <div className="details">
      {loading && <h2>Loading......</h2>}
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{animal} - {breed} - {city}, {state}</h2>
        <button>Adopt {name}</button>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Details
