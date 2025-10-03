import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Button } from './components/ui/button'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import AuthProvider, { AuthContext } from './components/AuthProvider'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useContext } from 'react'

function App() {

  const RedirectHandler = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return <Navigate to={isLoggedIn ? '/dashboard' : '/'} replace />
  }

  return (
    <>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<RedirectHandler />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  )
}

export default App
