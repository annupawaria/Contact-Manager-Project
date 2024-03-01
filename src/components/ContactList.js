// import { valueToPercent } from '@mui/base'
import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactList = ({contact,removeContact}) => {
  // const{contact,removeContact}=props
  console.log(contact)
  // console.log(contact,'from conatctlst')
  const ContactList=contact.map((val)=>{
    return(
      <div className='contacts'>
      <div>{val.data.name}</div>
      <div>{val.data.email}</div>
      <span onClick={()=>removeContact(val.id)}><FontAwesomeIcon icon={faTrashAlt}/></span>
      </div>
    )
  })
  return (
    <>
    <div>
      ContactList
    </div>
    <div>{ContactList}</div>
    </>
  )
}

export default ContactList
