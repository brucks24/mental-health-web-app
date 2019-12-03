import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React, { useState } from 'react'
import useStyles from './styles'
import image from '../../assets/new-hall.jpg'
import Fade from '@material-ui/core/Fade'
import { withRouter } from 'react-router-dom'

import { useUserDispatch, loginUser } from '../../context/UserContext'

function Login(props) {
	const classes = useStyles()

	const userDispatch = useUserDispatch()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [emailValue, setEmailValue] = useState("")
	const [passwordValue, setPasswordValue] = useState("")
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
		showSignUpOptions: false,
		showSignIn: true
	})

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword })
	}

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	const handleSignUpClick = () => {
		setValues({
			showSignUpOptions: true,
			showSignIn: false
		})
	}

	const buttonsDisplay = () => {
		const StudentLink = () => <Link to="/signUpStudent" />
		const CoachLink = () => <Link to="/signUpCoach" />

		return (
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

	return (
		<Grid container className={classes.container}>
			<div className={classes.left}>
				<img src={image} alt="logo" className={classes.image} />
			</div>
			<div className={classes.right}>
				<Grid container spacing={2} className={classes.contain}>
					{values.showSignIn &&
						<Grid item xs={6} className={classes.gridItem}>
							<Typography variant="h4">Sign in</Typography>
							<Typography style={{ marginBottom: '8px' }}>Sign in with email and password</Typography>
							<Fade in={error}>
								<Typography style={{ marginBottom: "32px" }}>
									Something went wrong...
								</Typography>
							</Fade>
							<form>
								<TextField
									className={classes.textInput}
									required
									id="outlined-basic"
									type="email"
									name="emailInput"
									label="Email"
									variant="outlined"
									value={emailValue}
									onChange={e => setEmailValue(e.target.value)} />
								<TextField
									required
									id="outlined-adornment-password"
									className={classes.textInput}
									variant="outlined"
									type={values.showPassword ? 'text' : 'password'}
									label="Password"
									value={passwordValue}
									//onChange={handleChange('password')}
									onChange={e => setPasswordValue(e.target.value)}
									InputProps={{
										endAdornment:
											<InputAdornment position="end">
												<IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
													{values.showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
									}}
								/>
							</form>
							<Button
									//type="submit"
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={loginUser(
										userDispatch,
										emailValue,
										passwordValue,
										props.history,
										setIsLoading,
										setError,
									)}
								>Sign in</Button>
							<Typography>Don't have an account?
							<Typography
									color="primary"
									onClick={handleSignUpClick}
									style={{ display: 'inline-block', marginLeft: '6px' }}>Sign up
                                </Typography>
							</Typography>
						</Grid>
					}
					{values.showSignUpOptions &&
						<Grid item xs={6} className={classes.gridItem}>
							<Typography variant="h4" style={{ marginBottom: "32px" }}>Are you a student or coach?</Typography>
							<Button
								className={classes.button}
								variant="contained"
								style={{ marginBottom: '16px', width: '100%' }}
								color="primary"
								component={Link}
								to="/signUpStudent">I am a student
                                </Button>
							<Button
								className={classes.button}
								variant="contained"
								style={{ marginBottom: '32px', width: '100%' }}
								color="secondary"
								component={Link}
								to="/signUpCoach">I am a coach
                                </Button>
							<Typography>Have an account? <a href="/login">Sign in</a></Typography>
						</Grid>
					}
				</Grid>
			</div>
		</Grid>
		// <div>
		// 	<div className={classes.left}>
		// 		<img src={require("../../assets/new-hall.jpg")} className={classes.image} alt="New hall" />
		// 	</div>
		// 	<div id="right-container">

		// 	</div>
		// </div>
	)
}

export default withRouter(Login)