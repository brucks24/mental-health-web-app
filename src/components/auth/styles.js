import { makeStyles } from "@material-ui/styles";

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
}));
