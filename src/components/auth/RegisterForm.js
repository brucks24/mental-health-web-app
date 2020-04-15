import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { Link } from 'react-router-dom';
import { Grid, Typography, Fade, Button, MenuItem, CircularProgress, withStyles } from '@material-ui/core';
import renderText from '../common/form/renderText';
import renderSelect from '../common/form/renderSelect';
import { useSelector } from 'react-redux';

const styles = theme => ({
  formButtons: {
    marginTop: theme.spacing(1),
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  progress: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    backgroundColor: theme.palette.primary.main,
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  logoSubtitle: {
    color: "white",
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  form: {
    width: 320,
  },
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    margin: theme.spacing(4),
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    height: 46,
    textTransform: "none",
  },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  buttons: {
    marginTop: theme.spacing(2),
    width: "100%"
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  signUpText: {
    marginTop: theme.spacing(4)
  },
  accountType: {
    width: "100%"
  }
});

function RegisterForm(props) {
  const { classes, handleSubmit, onSubmit } = props;
  const { loading, errors } = useSelector(state => ({
    loading: state.UI.loading,
    errors: state.UI.errors
  }));
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>UWW SASS</Typography>
        <Typography variant="h4" className={classes.logoSubtitle}>UWW Student Athlete Success System</Typography>
      </div>
      <div className={classes.formContainer}>
        <form method="post" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Typography variant="h4" className={classes.greeting}>
            Create an Account
          </Typography>
          <Typography color="secondary" className={classes.errorMessage}>
            {errors}
          </Typography>
          <Field
            name="accountType"
            classes={classes}
            component={renderSelect}
            label="Account type"
            labelWidth={labelWidth}
            inputLabel={inputLabel}
          >
            <MenuItem value={0}>Student</MenuItem>
            <MenuItem value={1}>Coach</MenuItem>
          </Field>
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
          {props.form.accountType === 1 && <Field
            type="password"
            name="coachKey"
            component={renderText}
            label="Coach key"
          />}
          <div className={classes.formButtons}>
            {loading
              ? <CircularProgress color="secondary" size={30} className={classes.progress} />
              : <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth={true}
              >Register
                  </Button>
            }
          </div>
          <Typography
            className={classes.signUpText}
          >Have an account? <Link to={'/'}>Sign in</Link></Typography>
        </form>
      </div>
    </Grid>
  );
}

function validateRegister(values) {
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
}

export default reduxForm({
  form: 'RegisterForm',
  validate: validateRegister
})(withStyles(styles)(RegisterForm));