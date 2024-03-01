import React,{useEffect, useState} from 'react'
import './App.css'
import ContactList from './components/ContactList'
import Header from './components/Header'
import uuid4 from 'uuid4'

const App = () => {
  const localStorageKey='contact'
 const[contact,setContact]=useState(()=>{
  return JSON.parse(localStorage.getItem(localStorageKey))||[]
 })
 useEffect(()=>{
  localStorage.setItem(localStorageKey,JSON.stringify(contact))
 },[contact])

 
const addContact=(data)=>{
  // console.log(data,'from spp.js')
  setContact([...contact,{id:uuid4(),data}])
}
function removeContact(id){
  const updatedList = contact.filter((val)=>{

  
return val.id !== id;})
setContact(updatedList)
}
  return (
    <div>
      <Header addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
      </div>
  )
}

export default App
