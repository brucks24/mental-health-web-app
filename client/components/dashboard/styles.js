import { makeStyles } from '@material-ui/core/styles';
import { purple, lightBlue, indigo, cyan, teal, green, lightGreen } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    titleText: {
        marginBottom: theme.spacing(2)
    },
    cardContent: {
        margin: theme.spacing(1),
    },
    card: {
        color: '#ffff',
        backgroundColor: purple[500]
    },
    cardPink: {
        backgroundColor: '#e91e63', 
        color: '#fff'
    },
    cardRed: {
        backgroundColor: '#f44336',
        color: '#fff'
    },
    cardBlue: {
        backgroundColor: lightBlue[500],
        color: '#fff'
    },
    cardIndigo: {
        backgroundColor: indigo[500],
        color: '#fff'
    },
    cardCyan: {
        backgroundColor: cyan[500],
        color: '#fff'
    },
    cardTeal: {
        backgroundColor: teal[500],
        color: '#fff'
    },
    cardGreen: {
        backgroundColor: green[500],
        color: '#fff'
    },
    cardLightGreen: {
        backgroundColor: lightGreen[500],
        color: '#fff'
    }
}));