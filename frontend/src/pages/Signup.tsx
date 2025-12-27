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

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const [snackSeverity, setSnackSeverity] = useState('success')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Signup attempt:', { email, password, confirmPassword })

        // Validation
        if (!email || !password || !confirmPassword) {
            setSnackMessage('Please fill all fields')
            setSnackSeverity('error')
            setOpenSnack(true)
            return
        }

        if (password !== confirmPassword) {
            setSnackMessage('Passwords do not match')
            setSnackSeverity('error')
            setOpenSnack(true)
            return
        }

        if (password.length < 6) {
            setSnackMessage('Password must be at least 6 characters')
            setSnackSeverity('error')
            setOpenSnack(true)
            return
        }

        // Check if credentials already exist
        const storedEmail = localStorage.getItem("email")
        if (storedEmail) {
            setSnackMessage('Account already exists. Please login.')
            setSnackSeverity('warning')
            setOpenSnack(true)
            return
        }

        // Save credentials and redirect
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        
        setSnackMessage('Account created successfully! Redirecting to login...')
        setSnackSeverity('success')
        setOpenSnack(true)
        
        setTimeout(() => {
            navigate('/login')
        }, 1500)
    }

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleCloseSnack = () => {
        setOpenSnack(false)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
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
                                    Create Your Vault
                                </Typography>
                                <Typography variant="body2" className="header-subtitle">
                                    Set up your master password
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
                            <TextField
                                autoComplete="OFF"
                                fullWidth
                                label="Confirm Password"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                                                aria-label="toggle confirm password visibility"
                                                onClick={toggleConfirmPasswordVisibility}
                                                edge="end"
                                                className="password-toggle"
                                            >
                                                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="submit-button"
                                size="medium"
                            >
                                Create Vault
                            </Button>
                        </Box>
                        
                        <Box className="form-info">
                            <hr />
                            <Typography variant="body2" className="security-note">
                                Your vault is encrypted locally. Never share your master password.
                            </Typography>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography variant="body2" className="security-note">
                                    Already have an account?{' '}
                                    <Link 
                                        component="button" 
                                        variant="body2" 
                                        onClick={handleLoginClick}
                                        sx={{ 
                                            color: '#eb479a',
                                            textDecoration: 'none',
                                            // '&:hover': {
                                            //     textDecoration: 'underline',
                                            //     color: '#eb479a'
                                            // }
                                        }}
                                    >
                                        Sign in here
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

export default Signup
