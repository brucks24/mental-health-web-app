import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";

// Import custom components
import renderText from '../common/form/renderText';

import useStyles from './styles'

function LoginForm(props) {
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
            Sign In
          </Typography>
          <Fade in={errorMessages}>
            <Typography color="secondary" className={classes.errorMessage}>
              {errorMessages}
            </Typography>
          </Fade>
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
              Sign In
            </Button>
            <Button
              color="primary"
              size="large"
              className={classes.forgetButton}
            >Forgot password</Button>
          </div>
          <Typography
            className={classes.signUpText}
          >Don't have an account? <Link to={'/signup'}>Sign up</Link></Typography>
        </form>
      </div>
    </Grid>
  )
}

function validateLogin(values) {
  const errors = {}

  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }
  return errors
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'LoginForm',
  validate: validateLogin
})(LoginForm)