import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Grow,
  TextField,
  Typography,
  CardActions,
} from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import { getUserData } from "../../redux/actions/dataActions";

import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const paramId = props.id;
  const user = useSelector((state) => state.data.user);

  const initialState = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone ? user.phone : "",
    bio: user.bio ? user.bio : "",
  };

  const [showEditProfile, setShowEditProfile] = React.useState(false);
  const [form, setForm] = React.useState(initialState);

  const handleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(getUserData(paramId));
    isCurrentUser();
  }, []);

  function isCurrentUser() {
    if (paramId !== user.id) {
      setShowEditProfile(false);
    }
  }

  return (
    <Fragment>
      <Typography variant="h5" className={classes.titleText}>
        Profile
      </Typography>
      <Card className={classes.card} elevation={3}>
        <CardMedia
          className={classes.photo}
          image={user.photoUrl}
          title="Profile"
        />
        <div className={classes.details}>
          <div className={classes.content}>
            <div className={classes.text}>
              <Typography className={classes.typography} variant="h4">
                {user.firstName}
              </Typography>
              <Typography className={classes.typography} variant="h4">
                {user.lastName}
              </Typography>
              <div style={{ marginTop: 16 }}>
                {user.accountType === 0 ? (
                  <Chip label="Student Athlete" color="secondary" />
                ) : (
                  <Chip label="Coach" color="secondary" />
                )}
                {showEditProfile ? (
                  <Button
                    style={{ marginLeft: 8 }}
                    color="primary"
                    onClick={() => handleEditProfile()}
                  >
                    Edit profile
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classes.info}>
            <Typography variant="subtitle1" gutterBottom>
              Biography
            </Typography>
            <Typography variant="body2">
              {user.bio ? user.bio : "No biography yet!"}
            </Typography>
          </div>
        </div>
      </Card>
      <Grow in={showEditProfile}>
        <Card className={classes.infoCard}>
          <CardContent>
            <Typography
              style={{ marginBottom: 16 }}
              variant="h5"
              component="h2"
            >
              Edit profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  className={classes.textField}
                  variant="outlined"
                  label="First name"
                  onChange={handleFormChange}
                  value={form.firstName}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  className={classes.textField}
                  variant="outlined"
                  label="Last name"
                  value={form.lastName}
                  onChange={handleFormChange}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  variant="outlined"
                  label="Email"
                  onChange={handleFormChange}
                  value={form.email}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="phone"
                  variant="outlined"
                  label="Phone number"
                  value={form.phone}
                  onChange={handleFormChange}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="bio"
                  variant="outlined"
                  label="Biography"
                  value={form.bio}
                  onChange={handleFormChange}
                  fullWidth={true}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button>Save changes</Button>
          </CardActions>
        </Card>
      </Grow>
    </Fragment>
  );
}

export default Profile;
