import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {
  Grid,
  Typography,
  Button,
  Fade,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from '@material-ui/core';

// Import custom components
import renderText from '../common/form/renderText';

import useStyles from './styles';

function RegisterForm(props) {
  const classes = useStyles();
  const [accountType, setAccountType] = React.useState('student');
  const { handleSubmit, onSubmit, errorMessages } = props;

  const handleChange = event => {
    setAccountType(event.target.value);
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>UWW SASS</Typography>
        <Typography variant="h4" className={classes.logoSubtitle}>UWW Student Athlete Success System</Typography>
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
          <FormControl>
            <FormLabel component="legend">Select an account type</FormLabel>
            <RadioGroup
              aria-label="acount-type"
              name="acount-type"
              value={accountType}
              onChange={handleChange}
            >
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="coach" control={<Radio />} label="Coach" />
            </RadioGroup>
          </FormControl>
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
          {/* <Field
            type="text"
            name="phone"
            component={renderText}
            label="Phone number"
          /> */}
          <Field
            type="password"
            name="password"
            component={renderText}
            label="Password"
          />
          {accountType === 'coach' && <Field
            type="password"
            name="coachKey"
            component={renderText}
            label="Coach key"
          />}
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Create New Account
            </Button>
        </form>
        <Typography className={classes.signUpText}>
          Already have an account? <Link to={'/'}>Login</Link>
        </Typography>
      </div>
    </Grid>
  );
}

const validateRegister = values => {
  const errors = {};

  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'coachKey'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }

  return errors;
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'RegisterForm',
  validate: validateRegister
})(RegisterForm);