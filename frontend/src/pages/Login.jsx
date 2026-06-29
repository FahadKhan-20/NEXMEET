import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import apiClient, { getApiErrorMessage } from '../utils/apiClient'
import { persistAuthSession, isAuthenticated } from '../utils/auth'
import etherxLogo from '../assets/etherx_transparent.png'
import { AUTH_CSS, AuthLeftPane, AppleIcon, GoogleIcon, MailIcon, LockIcon, EyeIcon } from './authShared'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Login() {
  const [email, setEmail]               = useState('')
  const [password, setPassword]         = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError]               = useState('')
  const [loading, setLoading]           = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated()) navigate('/', { replace: true })
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Please enter your email and password.'); return }
    setLoading(true)
    try {
      const res = await apiClient.post('/api/auth/login', { email, password })
      if (res.data.success) {
        persistAuthSession({ token: res.data.data.token, user: res.data.data.user })
        navigate('/', { replace: true })
        return
      }
      setError('Login failed. Please try again.')
    } catch (err) {
      setError(getApiErrorMessage(err, 'Invalid email or password.'))
    }
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <style>{AUTH_CSS}</style>
      <div className="auth-glow-accent" />

      <motion.div
        className="auth-split-wrapper"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="auth-top-accent" />
        <AuthLeftPane isLogin={true} logoSrc={etherxLogo} />

        <motion.div
          className="auth-right-pane"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            variants={itemVariants}
            src={etherxLogo}
            alt="EtherXMeet"
            className="auth-logo-mobile"
          />

          <motion.h2 variants={itemVariants} className="auth-form-title">
            Sign In
          </motion.h2>
          
          <motion.p variants={itemVariants} className="auth-form-sub">
            Unlock the full potential of EtherXMeet.
          </motion.p>

          <motion.div variants={itemVariants} className="auth-social-group">
            <button
              type="button"
              className="auth-social-btn"
              onClick={() => { window.location.href = `${API_BASE}/api/auth/apple` }}
            >
              <AppleIcon /> Continue with Apple
            </button>
            <button
              type="button"
              className="auth-social-btn"
              onClick={() => { window.location.href = `${API_BASE}/api/auth/google` }}
            >
              <GoogleIcon /> Continue with Google
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="auth-divider">
            or use email
          </motion.div>

          {error && (
            <motion.div variants={itemVariants} className="auth-error-box">
              <span>⚠</span> {error}
            </motion.div>
          )}

          <motion.form variants={itemVariants} onSubmit={handleLogin} className="auth-form">
            <div className="auth-input-wrap">
              <MailIcon />
              <input
                className="auth-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-input-wrap">
              <LockIcon />
              <input
                className="auth-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{ paddingRight: '44px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="auth-eye-btn"
                tabIndex={-1}
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="auth-cta-btn"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </motion.form>

          <motion.button
            variants={itemVariants}
            type="button"
            className="auth-close-btn"
            onClick={() => navigate('/')}
          >
            Close
          </motion.button>

          <motion.p variants={itemVariants} className="auth-footer">
            Don't have an account?{' '}
            <Link to="/register" className="auth-footer-link">Register</Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
