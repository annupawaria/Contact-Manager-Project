import React ,{useState} from "react";
// import './App.css'

const Header = ({addContact})=>{
    const[contactData,setContactData]=useState({name:"",email:""})
    const handleChange =(e)=> {
      //
      if(e.target.name === 'name'){
        setContactData({...contactData,name:e.target.value}) 
      }else{
        setContactData({...contactData,email:e.target.value})
      }
    }
     function addHandle(){
      if(contactData.name === ""||contactData.email === ""){
          alert('fill all the fields')
          return
        }
          else {
            // console.log(contactData)
            addContact(contactData)
            setContactData({name:"",email:""})
          }
        }
     
   
  
 

  return (
    <div>
      <div className="header"> Manage Contacts</div>
      <h1>Add Contact</h1>
      Name:
      <br />
      <input
        className="inp1"
        type="text"
        name="name"
        placeholder="enter name"
        value={contactData.name}
        onChange={handleChange}
        
      />
      <br />
      Email:
      <br />
      <input
        className="inp1"
        type="text"
        name="email"
        placeholder="enter Email"
        value={contactData.email}
        onChange={handleChange}
        
      />
      <br />
      {/* <Button>Add Contact</Button> */}
      <button className="btn" onClick={addHandle} >Add Contact</button>
    </div>
  );
  }

export default Header;
