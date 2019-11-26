import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
    button: {
        width: '100%',
        marginBottom: '32px'
    }
})

class SignUpStudent extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
        readTC: false
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value })
    };

    handleCheckChange = prop => event => {
        this.setState({ [prop]: event.target.checked })
    }
    
    handleClickShowPassword = () => {
        this.setState(state => ({ 
            showPassword: !state.showPassword
        }))
    };

    handleClickShowConfirmPassword = () => {
        this.setState(state => ({
            showConfirmPassword: !state.showConfirmPassword
        }))
    }

    handleMouseDownPassword = event => {
        event.preventDefault()
    }

    render() {
        const { classes } = this.props

        return(
            <div>
                <div className={classes.left}>
                    <img src={require("../../assets/new-hall.jpg")} className={classes.image} alt="New hall" />
                </div>
                <Grid container spacing={2} className={classes.contain}>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Typography variant="h4">Create a coach account</Typography>
                        <Typography style={{marginBottom: '32px'}}>Enter a name, email, and password to continue</Typography>
                        <form>
                            <TextField
                                required
                                className={classes.textInput}
                                id="outlined-basic"
                                name="firstNameInput"
                                label="First name"
                                variant="outlined" />
                            <TextField
                                required
                                className={classes.textInput}
                                id="lastNameInput"
                                label="Last name"
                                variant="outlined" />
                            <TextField
                                required
                                className={classes.textInput}
                                type="email"
                                id="emailInput"
                                label="Email"
                                variant="outlined" />
                            <TextField
                                required
                                id="outlined-adornment-password" 
                                className={classes.textInput} 
                                variant="outlined" 
                                type={this.state.showPassword ? 'text' : 'password'} 
                                label="Password" 
                                value={this.state.password} 
                                onChange={this.handleChange('password')} 
                                InputProps={{
                                    endAdornment: 
                                    <InputAdornment position="end">
                                        <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }}     
                            />
                            <TextField
                                required
                                id="outlined-adornment-password" 
                                className={classes.textInput} 
                                variant="outlined" 
                                type={this.state.showConfirmPassword ? 'text' : 'password'} 
                                label="Confirm password" 
                                value={this.state.confirmPassword} 
                                onChange={this.handleChange('confirmPassword')} 
                                InputProps={{
                                    endAdornment: 
                                    <InputAdornment position="end">
                                        <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowConfirmPassword}>
                                            {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }}     
                            />
                            <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox 
                                        checked={this.state.readTC}
                                        onChange={this.handleCheckChange('readTC')}
                                        value="readTC" />
                                }
                                label="I have read the Terms and Conditions"
                                labelPlacement="end"
                                style={{marginBottom: '16px'}}
                            />
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>Create account</Button>
                        </form>
                        <Typography>Have an account? <a href="/login">Sign in</a> </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpStudent)