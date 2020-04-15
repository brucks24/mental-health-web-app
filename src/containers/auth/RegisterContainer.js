import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/auth/RegisterForm';
import { registerUser } from '../../redux/actions/userActions';

function RegisterContainer(props) {
  const { errorMessages } = props;
  const dispatch = useDispatch();

  function submitForm(userData) {
    dispatch(registerUser(userData));
    
  }

  return (
    <RegisterForm
      errorMessages={errorMessages}
      onSubmit={submitForm}
    />
  )
}

export default RegisterContainer;