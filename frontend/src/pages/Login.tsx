import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
    TextField, 
    Button, 
    Container, 
    Box, 
    Typography, 
    InputAdornment, 
    IconButton,
    Snackbar,
    Alert,
    Link
} from "@mui/material"
import { 
    Email as EmailIcon, 
    Lock as LockIcon, 
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material'
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const [snackSeverity, setSnackSeverity] = useState('success')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempt:', { email, password })

        const storedEmail = localStorage.getItem("email") || "admin@passvault.com"
        const storedPassword = localStorage.getItem("password") || "admin@123"

        if (email === storedEmail && password === storedPassword) {
            setSnackMessage('Login successful! Redirecting...')
            setSnackSeverity('success')
            setOpenSnack(true)
            
            setTimeout(() => {
                navigate('/dashboard')
            }, 1500)
        } else {
            setSnackMessage('Invalid email or password')
            setSnackSeverity('error')
            setOpenSnack(true)
        }
    }

    const handleSignupClick = () => {
        navigate('/signup')
    }

    const handleForgotPassword = () => {
        // Reset password functionality
        if (email) {
            localStorage.removeItem("password")
            setSnackMessage('Password reset instructions sent to your email. Please login with new password.')
            setSnackSeverity('success')
            setOpenSnack(true)
        } else {
            setSnackMessage('Please enter your email first')
            setSnackSeverity('warning')
            setOpenSnack(true)
        }
    }

    const handleCloseSnack = () => {
        setOpenSnack(false)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <Box className="login-container">
                <Container maxWidth="sm">
                    <Box component="form" onSubmit={handleSubmit} className="form-group">
                        <Box className="form-header">
                            <Box className="header-content">
                                <LockIcon className="logo" sx={{ fontSize: 60 }} />
                                <Typography variant="h4" className="header-title">
                                    Welcome back
                                </Typography>
                                <Typography variant="body2" className="header-subtitle">
                                    Sign in to access your secure vault
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box className="form-footer">
                            <TextField
                                autoComplete="OFF"
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                                margin="normal"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon className="input-icon" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                autoComplete="OFF"
                                fullWidth
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                                margin="normal"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon className="input-icon" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={togglePasswordVisibility}
                                                edge="end"
                                                className="password-toggle"
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                                <Link 
                                    component="button" 
                                    variant="body2" 
                                    onClick={handleForgotPassword}
                                    sx={{ 
                                        color: '#eb479a',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        // '&:hover': {
                                        //     textDecoration: 'underline',
                                        //     color: '#4f8dfc'
                                        // }
                                    }}
                                >
                                    <br />
                                    Forgot Password?
                                </Link>
                            </Box> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="submit-button"
                                size="medium"
                            >
                                Vault Login
                            </Button>
                        </Box>
                        
                        <Box className="form-info">
                            <hr />
                            <Typography variant="body2" className="security-note">
                                Your vault is encrypted locally. Never share your master password.
                            </Typography>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography variant="body2" className="security-note">
                                    Don't have an account?{' '}
                                    <Link 
                                        component="button" 
                                        variant="body2" 
                                        onClick={handleSignupClick}
                                        sx={{ 
                                            color: '#eb479a',
                                            textDecoration: 'none',
                                            // '&:hover': {
                                            //     textDecoration: 'underline',
                                            //     color: '#eb479a'
                                            // }
                                        }}
                                    >
                                        Sign up here
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Snackbar
                open={openSnack}
                autoHideDuration={4000}
                onClose={handleCloseSnack}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnack}
                    severity={snackSeverity}
                    sx={{ 
                        width: '100%',
                        fontWeight: 500,
                        '& .MuiAlert-icon': {
                            fontSize: '1.5rem'
                        }
                    }}
                >
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Login
