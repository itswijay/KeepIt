import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Button } from './components/ui/button'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
