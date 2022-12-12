import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ContactFormStyle,
    LabelForm,
    InputForm,
    ButtonForAdd,
} from 'components/ContactForm/ContactForm.styled';


export class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmitForm = event => {
    event.preventDefault();
    const { handleSubmit } = this.props;
    const { name, number } = this.state;
    handleSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormStyle onSubmit={this.onSubmitForm}>
        <LabelForm>Name</LabelForm>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <LabelForm>Number</LabelForm>
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
        />
        <ButtonForAdd type="submit">Add contact</ButtonForAdd>
      </ContactFormStyle>
    );
  }
}