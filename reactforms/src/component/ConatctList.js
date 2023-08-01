import React from 'react'
import ContactCard from './ContactCard';
import {useState} from "react-hook-form";

const ConatctList = (props) => {
  console.log(props);

  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  };  

  const renderContactList=props.contacts.map((contact)=>{
    return (
     <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
 
 
  );
});
return <div className="ui called list">{renderContactList}</div>
}


export default ConatctList
