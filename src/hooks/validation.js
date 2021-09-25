import React from 'react';
import {email as emailCheck} from 'is_js';

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleIsValid = (event) => {
    if (event.target.closest("form").checkValidity() && emailCheck(values.email)) {
      return true;
    } return false;
  }

  const emailErrMessage = emailCheck(values.email) ? '' : 'Email-адрес должен содержать национальный домен после точки';

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage || emailErrMessage });
    setIsValid(handleIsValid(event));
  };

  return { values, handleChange, errors, isValid };
}