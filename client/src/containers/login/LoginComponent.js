import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    left: {
        width: '50%',
        position: 'absolute',
        left: '0px',
        height: '100%'
    },
    right: {
        width: '50%',
        position: 'absolute',
        right: '0px',
        height: '100%'
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
    }
})


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailInput: '',
            passwordInput: '',
            showPassword: false,
            showSignUpOptions: false,
            showSignIn: true
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })

        switch (name) {
            case 'emailInput':
                this.setState({
                    emailInputError: ''
                })
                break
            case 'passwordInput':
                this.setState({
                    passwordInputError: ''
                })
                break
            default:
        }
    }

    handleClickShowPassword = () => {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword
        })
    }

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    handleSignUpClick = () => {
        this.setState({
            showSignUpOptions: true,
            showSignIn: false
        })
    }

    buttonsDisplay = () => {
        const { classes } = this.props
        const StudentLink = () => <Link to="/signUpStudent" />
        const CoachLink = () => <Link to="/signUpCoach" />

        return(
            <div>
                <Button
                    component={StudentLink}
                    className={classes.button}
                >I am a student</Button>
                <Button
                    component={CoachLink}
                    className={classes.button}
                >I am a choach
                </Button>
            </div>
        )
    }

    render() {
        const { classes } = this.props

        return(
            <div>
                <div className={classes.left}>
                    <img src={require("../../assets/new-hall.jpg")} className={classes.image} alt="New hall" />
                </div>
                <div id="right-container">
                    <Grid container spacing={2} className={classes.contain}>
                        {this.state.showSignIn && 
                            <Grid item xs={6} className={classes.gridItem}>
                            <Typography variant="h4">Sign in</Typography>
                            <Typography style={{marginBottom: "32px"}}>Sign in with email and password</Typography>
                            <form>
                                <TextField 
                                className={classes.textInput}
                                required
                                id="outlined-basic"
                                type="email"
                                name="emailInput"
                                label="Email"
                                variant="outlined" />
                                <FormControl required variant="outlined" className={classes.textInput}>
                                    <InputLabel htmlFor="outlined-adorment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adorment-password"
                                        name="passwordInput"
                                        type={this.state.passwordInput}
                                        onChange={this.handleInputChange} 
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </form>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button}
                                >Sign in</Button>
                            <Typography>Don't have an account? 
                                <Typography 
                                    color="primary" 
                                    onClick={this.handleSignUpClick}
                                    style={{display: 'inline-block', marginLeft: '6px'}}>Sign up
                                </Typography>
                            </Typography>
                        </Grid>
                        }
                        {this.state.showSignUpOptions && 
                            <Grid item xs={6} className={classes.gridItem}>
                                <Typography variant="h4" style={{marginBottom: "32px"}}>Are you a student or coach?</Typography>
                                <Button 
                                    variant="contained"
                                    style={{marginBottom: '16px', width: '100%'}}
                                    color="primary" 
                                    component={Link} 
                                    to="/signUpStudent">I am a student
                                </Button>
                                <Button 
                                    variant="contained"
                                    style={{marginBottom: '32px', width: '100%'}}
                                    color="secondary"
                                    component={Link}
                                    to="/signUpCoach">I am a coach
                                </Button>
                                <Typography>Have an account? <a href="/login">Sign in</a></Typography>
                            </Grid>
                        }
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(LoginComponent)