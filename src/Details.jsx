import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import ThemeContext from "./ThemeContext";
import Modal from './Modal'

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
  const [err, setErr] = useState(false)
  const [theme] = useContext(ThemeContext)
  const [showModal,setShowModal] = useState(false)

  function toggleModal() {
    setShowModal(!showModal)
  }
  function adoptPet() {
    window.location = "http://bit.ly/pet-adopt"
  }

  useEffect(() =>{
    detailsFetch()
  }, [])

  async function detailsFetch(){
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    const json = await res.json()
    try {
      setLoading(false)
      setName(json.pets[0].name)
      setAnimal(json.pets[0].animal)
      setCity(json.pets[0].city)
      setState(json.pets[0].state)
      setBreed(json.pets[0].breed)
      setDesc(json.pets[0].description)
      setImages(json.pets[0].images)
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className="details">
      {err ? <ErrorBoundary /> : (
        <>
          {loading && <h2>Loading......</h2>}
          <Carousel images={images} />
          <div>
            <h1>{name}</h1>
            <h2>{animal} - {breed} - {city}, {state}</h2>
            <button onClick={toggleModal} style={{backgroundColor: theme}}>Adopt {name}</button>
            <p>{desc}</p>
            {
              showModal ? (
                <Modal>
                  <div>
                    <h2>Would you like to adopt {name}?</h2>
                    <div className="buttons">
                      <button onClick={adoptPet}>Yes</button>
                      <button onClick={toggleModal}>No</button>
                    </div>
                  </div>
                </Modal>
              ): null
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Details
