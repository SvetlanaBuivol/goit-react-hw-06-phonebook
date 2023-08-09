import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ContactItem, DeleteBtn } from './Сontact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contactsSlice';
import { Notify } from 'notiflix';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));

    Notify.success('Deleted', {
      position: 'center-top',
      clickToClose: true,
      timeout: 1500,
      success: {
        background: '#9dbc89df',
      },
    });
  };
  return (
    <ContactItem id={id}>
      <p>{name}</p>
      <div>
        <p>{number}</p>
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          <RiDeleteBin6Line />
        </DeleteBtn>
      </div>
    </ContactItem>
  );
}

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
