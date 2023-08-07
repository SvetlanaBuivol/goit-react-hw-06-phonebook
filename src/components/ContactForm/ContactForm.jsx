import { useState} from 'react';
import PropTypes from 'prop-types';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import {
  FormContainer,
  Label,
  Input,
  Icon,
  Button,
} from './ContactForm.styled';

export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit({name, number});

   reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <div>
        <Label>
          <Icon>
            <BsFillPersonFill size="22" />
          </Icon>

          <Input
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Icon>
            <BsFillTelephoneFill size="22" />
          </Icon>

          <Input
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </div>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func,
};




// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { handleFormSubmit, state, handleInputChange } = this;

//     return (
//       <FormContainer onSubmit={handleFormSubmit}>
//         <div>
//           <Label>
//             <Icon>
//               <BsFillPersonFill size="22" />
//             </Icon>

//             <Input
//               value={state.name}
//               onChange={handleInputChange}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             <Icon>
//               <BsFillTelephoneFill size="22" />
//             </Icon>

//             <Input
//               value={state.number}
//               onChange={handleInputChange}
//               type="tel"
//               name="number"
//               pattern="\+?[0-9\s\-\(\)]+"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </div>
//       </FormContainer>
//     );
//   }
// }



// ContactForm.propTypes = {
//   handleFormSubmit: PropTypes.func,
// };
