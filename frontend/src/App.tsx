// App.tsx
import { useEffect, useState } from "react"
import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
import "./App.css"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000) // show for 3 seconds
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-screen">
        <div className="loader-card">
          <div className="loader-icon">
            <span className="loader-lock">🔒</span>
          </div>
          <h1 className="loader-title">Secure Vault</h1>
          <p className="loader-subtitle">Your passwords, protected</p>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<div>Dashboard Page</div>} />
    </Routes>
  )
}

export default App
