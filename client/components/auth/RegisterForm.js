import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import {
  Grid,
  Typography,
  Button,
  Fade,
} from "@material-ui/core";

// Import custom components
import renderText from '../common/form/renderText';

import useStyles from './styles'

function RegisterForm(props) {
  const classes = useStyles()
  const { handleSubmit, onSubmit, errorMessages } = props

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>Stuath System</Typography>
      </div>
      <div className={classes.formContainer}>
        <form method="post" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Typography variant="h4" className={classes.greeting}>
            Sign Up
          </Typography>
          <Fade in={errorMessages}>
            <Typography color="secondary" className={classes.errorMessage}>
              {errorMessages}
            </Typography>
          </Fade>
          <Field 
            type="text"
            name="firstName"
            component={renderText}
            label="First name"
          />
          <Field 
            type="text"
            name="lastName"
            component={renderText}
            label="Last name"
          />
          <Field
            type="email"
            name="email"
            component={renderText}
            label="Email"
          />
          <Field 
            type="password"
            name="password"
            component={renderText}
            label="Password"
          />
          <div className={classes.formButtons}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Create New Account
            </Button>
          </div>
        </form>
        <Typography className={classes.signUpText}>
            Already have an account? <Link to={'/'}>Login</Link>
        </Typography>
      </div>
    </Grid>
  )
}

const validateLogin = values => {
    const errors = {};

    const requiredFields = [
        'email',
        'password'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)';
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Invalid email address.)';
    }
    return errors
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default reduxForm({
    form: 'RegisterForm',
    validate: validateLogin
})(RegisterForm)