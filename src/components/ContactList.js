import { Delete } from '@mui/icons-material';
import React from 'react';

const ContactList = ({ contact }) => {
  // console.log(contact,'from contactList')
  // Renamed the variable to avoid naming conflict
  const contactList =  contact.map((val) => {
    return (
      <div key={val.id}>
        <div>{val.name}</div>
        <div>{val.email}</div>
        {/* <span><DeleteIcon/></span> */}
      </div>
    );
  });

  return (
    <div>
      <h1>ContactList</h1>
      <div>{contactList}</div>
    </div>
  );
};

export default ContactList;
