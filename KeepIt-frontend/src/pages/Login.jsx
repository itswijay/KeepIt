import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/components/AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()

    const loadingToast = toast.loading('Loging in...')

    const userData = {
      username,
      password,
    }
    console.log(userData)

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/token/',
        userData
      )
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      toast.dismiss(loadingToast)

      console.log('Login successful!')
      toast.success('Login successful!')
      setIsLoggedIn(true)
      navigate("/")

    } catch (error) {
      console.error('Invalid credentials', error)
      toast.dismiss(loadingToast)
      toast.error('Invalid credentials')
    }
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-[#444141]/60 p-8 w-xs md:w-lg rounded-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
            Login
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="password"
              value={password}
              placeholder="Set password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <Button type="submit" className="text-sm">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
