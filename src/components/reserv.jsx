import Navbar from "./Navbar.jsx"
import "../App.css";
//import ReservationForm from "./reservas";
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc
} from 'firebase/firestore'
import { db } from '../firebase.js'

function Reserva() {

    const [reservations, setReservations] = useState([])
    const [name, setName] = useState('');
    const [numPeople, setNumPeople] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [form, setForm] = useState(null)
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}`);
      console.log(`Number of people: ${numPeople}`);
      console.log(`Date: ${date}`);
      console.log(`Time: ${time}`);
    }

    const getData = () => {
      const arrData = []
      onSnapshot(collection(db, 'reservations'), (snapshot) => {
        snapshot.docs.forEach((item) => {
          console.log(item.data())
          arrData.push({
            ...item.data(),
            id: item.id
          })
          console.log(arrData)
          setReservations(arrData)
        })
      })
    }

    const createReservations = (() => {
      if (form) {
        addDoc(collection(db, 'reservations'), form)
      } else {
        alert('formulario vacio')
      }
      getData()
    })

    const handleChange = (ev) => {
      setForm({
        ...form,
        [ev.name]: ev.value
      })
      console.log(form)
    }
  
    const onDelete = async (id) => {
      console.log(id)
      await deleteDoc(doc(db, 'reservations', id));
      getData()
    }

    
  useEffect(() => {
    getData()
  }, [])

    return (
      <div className="App">
        <Navbar />
        <h1>Formulario de Reservas</h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => handleChange(e.target)}
        />
      </Form.Group>

      <Form.Group controlId="formNumPeople">
        <Form.Label>Número de personas</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresa el número de personas"
          min={1}
          value={numPeople}
          onChange={(e) => handleChange(e.target)}
        />
      </Form.Group>

      <Form.Group controlId="formDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          placeholder="Ingresa la fecha"
          value={date}
          onChange={(e) => handleChange(e.target)}
        />
      </Form.Group>

      <Form.Group controlId="formTime">
        <Form.Label>Hora</Form.Label>
        <Form.Control
          type="time"
          placeholder="Ingresa la hora"
          value={time}
          onChange={(e) => handleChange(e.target)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={() => createReservations()}>
        Enviar
      </Button>
    </Form>
      </div>
    );
 }
  
  export default Reserva;