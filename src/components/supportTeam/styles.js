import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  paper: {
    //display: "flexbox",
    alignItems: "center",
    maxWidth: 340
  },
  avatarContainer: {
    textAlign: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  nameContainer: {
    marginTop: theme.spacing(3),
    margin: `0 auto`,
    textAlign: "center"
  },
  typeText: {
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing(1)
  }
}));