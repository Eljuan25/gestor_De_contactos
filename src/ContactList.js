import React from 'react'; 

const ContactList = ({ contacts, deleteContact, editContact }) => {

  const handleEdit = (index) => {
    const newName = prompt('Nuevo nombre:');
    const newPhone = prompt('Nuevo teléfono:');
    const newEmail = prompt('Nuevo correo electrónico:');
    if (newName && newPhone && newEmail) {
      editContact(index, newName, newPhone, newEmail);
    }
  };

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div className="contact-container">
              <div className="name-container">{contact.name} - {contact.phone} -{contact.email}</div>
              <div className="button-container">
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => deleteContact(index)}>Eliminar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

