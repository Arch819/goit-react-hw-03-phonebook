import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  ButtonIcon,
  ButtonSubmit,
  ButtonText,
  ErrorMessageStyled,
  FormStyled,
  InputBox,
} from './FormaAddContact.syled';

const schema = object().shape({
  name: string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format.'
    )
    .required('This field is required'),
  number: string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('This field is required'),
});
const initialValues = {
  name: '',
  number: '',
};

export class FormAddContact extends Component {
  handleSubmit = (value, { resetForm }) => {
    this.props.addContact(value);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <label>
            Name<span>*</span>
            <InputBox>
              <Field
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage  component={ErrorMessageStyled} name="name" />
            </InputBox>
          </label>
          <label>
            Number<span>*</span>
            <InputBox>
              <Field
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage component={ErrorMessageStyled}  name="number" />
            </InputBox>
          </label>
          <ButtonSubmit type="submit">
            <ButtonText>Add contact</ButtonText>
            <ButtonIcon>
              <svg
                // className="svg w-8 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" x2="12" y1="5" y2="19"></line>
                <line x1="5" x2="19" y1="12" y2="12"></line>
              </svg>
            </ButtonIcon>
          </ButtonSubmit>
        </FormStyled>
      </Formik>
    );
  }
}

FormAddContact.propTypes = {
  addContact: PropTypes.func,
};
