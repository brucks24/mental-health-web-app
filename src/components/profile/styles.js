import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  titleText: {
    marginBottom: theme.spacing(2)
  },
  card: {
    maxWidth: 600,
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  infoCard: {
    maxWidth: 600,
    marginBottom: theme.spacing(2),
  },
  photo: {
    width: 250,
    height: "auto"
  },
  details: {
    width: "100%"
  },
  content: {
    width: "100%",
    flex: "1 0 auto",
    boxShadow: `0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 20px 0 rgba(0, 0, 0, 0.01)`
  },
  typography: {
    letterSpacing: 5,
    fontWeight: "bold"
  },
  text: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  info: {
    margin: theme.spacing(4)
  }
}));