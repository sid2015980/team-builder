import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';

const initialMembers = [
  { id: uuid(), name: 'Tony Stark', email: 'tony@starkindustries.com', role: 'Full-Stack'},
  { id: uuid(), name: 'Spongebob Squarepants', email: 'sponge@bikinibottom.com', role: 'UI/UX'},
  { id: uuid(), name: 'Patrick Star', email: 'starfish@bikinibottom.com', role: 'Back-End'},
  { id: uuid(), name: 'Rocky Balboa', email: 'thechamp@rocky.com', role: 'Front-End'},
  { id: uuid(), name: 'Axel Foley', email: 'axel@beverlyhillscop.com', role: 'Full-Stack'},
  { id: uuid(), name: 'Modelo Man', email: 'mm@itsmodelotime.com', role: 'Saving The Day'},
]

function App() {

  const [members, setMembers] = useState (initialMembers)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
  })

  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value

    setFormValues({
      ...formValues, [inputThatChanged]: newValueForInput,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault()

    const newMembers = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }
    setMembers([...members, newMembers])
  }

  return (
    <div className="App">
      <Form
      onInputChange={onInputChange}
      formValues={formValues}
      onFormSubmit={onFormSubmit}
    />

    <h1>Team Members!</h1>
    {
      members.map(memb => <div key={memb.id}> <br/> Name: {memb.name} <br/> Email: {memb.email} <br/> Role: {memb.role} </div>)
    }
    </div>
  )
}

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label>Name:
        <input 
        onChange={props.onInputChange}
        value={props.formValues.name}
        name='name'
        type='text'
        />
      </label><br />

      <label>Role:
        <input 
        onChange={props.onInputChange}
        value={props.formValues.role}
        name='role'
        type='text'
        />
      </label><br />

      <label>Email:
        <input 
        onChange={props.onInputChange}
        value={props.formValues.email}
        name='email'
        type='text'
        />
      </label><br />
    <input type='submit' />
    </form>
  )
}

export default App;
