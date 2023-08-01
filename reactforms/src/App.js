
import React ,{useState,useEffect} from "react";

import AddContact from './component/AddContact';
import ContactList from './component/ConatctList';
import ContactCard from './component/ContactCard';
import Header from './component/Header';
import { v4 as uuid } from "uuid";
function App() {
  const LOCAL_STORAGE_KEY="contacts"; 
const [contacts,setContacts]=useState([]);

const addContactHandler=(contact)=>{
  
  console.log(contact);
  setContacts([...contacts,{id: uuid(),...contacts}]);
};

const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!==id;
  });
  setContacts(newContactList);
};

useEffect(()=> {
 const retriveContacts=JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY));
 if(retriveContacts) 
   setContacts(retriveContacts)
},[]);


useEffect(()=> {
  localStorage.setItem( LOCAL_STORAGE_KEY,JSON.stringify(contacts));

},[contacts]);

  return (
    <div>
        <Header />
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>

     </div>
  );
}

export default App;
