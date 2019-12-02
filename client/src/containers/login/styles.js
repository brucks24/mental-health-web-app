import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
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
    left: {
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
    right: {
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
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    contain: {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
        width: '50%',
        position: 'absolute',
        right: '0px',
        height: '100%'
    },
    gridItem: {
        margin: '0 auto'
    },
    textInput: {
        width: '100%',
        marginBottom: '16px'
    },
    showSignUpOptions: {
        display: 'none'
    },
    button: {
        width: '100%',
        marginBottom: '32px'
    },
    hideOptions: {
        display: 'none'
    },
    margin: {
        margin: theme.spacing(1),
    },
}))