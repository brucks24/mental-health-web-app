import React from 'react';
import useStyles from './styles';
import clsx from "clsx";
import ChatFeed from '../chat/ChatFeed.js';

import {
  Avatar,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  Badge,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import {
  PhoneAndroid,
  Email,
  ExpandMore,
  AccessTime as OfficeHoursIcon,
  Chat
} from "@material-ui/icons";
import { green, red, yellow } from '@material-ui/core/colors';
import { render } from '@testing-library/react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    },
    errpr: {
      main: red[500]
    },
    secondary: {
      main: yellow[500]
    }
  }
});

export function SupportTeamCard({
  id,
  photoUrl,
  firstName,
  lastName,
  providerType,
  phone,
  email,
  officeHours,
  status
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showChat, setChat] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  // TODO: Add logic to handle button presses
  //sm={6} xl={3} xs={12}
  return (
    <Grid item key={id} lg={3} sm={6} xl={3} xs={12}>
      <Card className={classes.paper} elevation={3}>
        <CardContent>
          <div className={classes.avatarContainer}>
            <ThemeProvider theme={theme}>
              {status === 'online' ?
                <Badge color="primary" overlap="circle" badgeContent=" ">
                  <Avatar className={classes.avatar} src={photoUrl} />
                </Badge>
                : status === 'away' ?
                  <Badge color="secondary" overlap="circle" badgeContent=" ">
                    <Avatar className={classes.avatar} src={photoUrl} />
                  </Badge>
                  :
                  <Badge color="error" overlap="circle" badgeContent=" ">
                    <Avatar className={classes.avatar} src={photoUrl} />
                  </Badge>
              }
            </ThemeProvider>
          </div>
          <div className={classes.nameContainer}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {firstName} {lastName}
            </Typography>
            <Typography className={classes.typeText}>
              {providerType}
            </Typography>
          </div>
          <Grid container justify="center" spacing={1}>
            <Grid item xs={6}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth={true}
              >
                Send Message
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => setChat(true)}
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth={true}
              >
                Invite to Chat
              </Button>
            </Grid>
          </Grid>
          <Button variant="contained" color="secondary" fullWidth={true}>
            Schedule Meeting
          </Button>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="nav" aria-label="main contact info">
            <ListItem button>
              <ListItemIcon>
                <PhoneAndroid />
              </ListItemIcon>
              <ListItemText primary={phone} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <OfficeHoursIcon />
              </ListItemIcon>
              <ListItemText primary={officeHours} />
            </ListItem>
          </List>
        </Collapse>
      </Card>
      {showChat === true && <ChatFeed />}
    </Grid>
   
  );
}

export default SupportTeamCard;