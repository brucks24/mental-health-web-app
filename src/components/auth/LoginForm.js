import { Button, Fade, Grid, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions/userActions';
import useStyles from './styles';

function LoginForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // handle props from passed from LoginContainer
  const { onSubmit, errorMessages } = props;
  const [userData, setUserData] = React.useState({});

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(userData, props.history));
  }

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>UWW SASS</Typography>
        <Typography variant="h4" className={classes.logoSubtitle}>UWW Student Athlete Success System</Typography>
      </div>
      <div className={classes.formContainer}>
        <form method="post" onSubmit={handleSubmit} className={classes.form}>
          <Typography variant="h4" className={classes.greeting}>
            Sign In
          </Typography>
          <Fade in={errorMessages}>
            <Typography color="secondary" className={classes.errorMessage}>
              {errorMessages}
            </Typography>
          </Fade>
          <TextField
            type="email"
            name="email"
            variant="outlined"
            margin="normal"
            fullWidth={true}
            label="Email"
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            variant="outlined"
            margin="normal"
            fullWidth={true}
            label="Password"
            onChange={handleChange}
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
          >Don't have an account? <Link to={'/register'}>Sign up</Link></Typography>
        </form>
      </div>
    </Grid>
  );
}

// Validate the fields from the login form
function validateLogin(values) {
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

  return errors;
}

// handle prop requirements from LoginContainer
LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  errorMessages: PropTypes.object,
  classes: PropTypes.object.isRequired
};

// export default reduxForm({
//   form: 'LoginForm',
//   validate: validateLogin
// })(LoginForm);

export default LoginForm;