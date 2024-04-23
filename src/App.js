// App.js

import React, { useState, useEffect } from 'react';
import './styles.css'; 

import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };
  
  const editContact = (index, newName) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = { ...updatedContacts[index], name: newName };
    setContacts(updatedContacts);
  };

  return (
    <div className="container">
      <h1>Gestor de Contactos</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact} />
    </div>
  );
};

export default App;
