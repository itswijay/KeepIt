import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Button } from './components/ui/button'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './components/AuthProvider'

function App() {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  )
}

export default App
