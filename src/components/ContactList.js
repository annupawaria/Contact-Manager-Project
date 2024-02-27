import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const ContactList = ({contact}) => {
// console.log(contact,'r contactList')
const contactList=contact.map((val)=>{
  return(
    <div className='contacts' >
      <div>{val.name}</div>
      <div>{val.email}</div>
      {/* <DeleteIcon/> */}
    </div>
  )
})
  return (
    <div>
      <h1>ContactList</h1>
      <div>{contactList}</div>
    </div>
  )
}

export default ContactList
