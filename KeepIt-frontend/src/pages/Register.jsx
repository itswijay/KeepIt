import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const fieldLabels = {
    username: 'Username',
    email: 'Email',
    password: 'Password',
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)

    const loadingToast = toast.loading('Please wait...')

    const userData = {
      username,
      email,
      password,
    }
    console.log(userData)

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/register/',
        userData
      )
      console.log('response.data => ', response.data)
      console.log('Registration successful!')

      toast.dismiss(loadingToast)
      toast.success('Registration successful!')

    } catch (error) {
      console.error('Registration error', error.response.data)
    //   setErrors(error.response.data)

      //   toast.error(`${fieldLabels.username}: ${errors.username}`)
      //   toast.error(`${fieldLabels.email}: ${errors.email}`)
      //   toast.error(`${fieldLabels.password}: ${errors.password}`)

      toast.dismiss(loadingToast)

    //   Object.entries(errors).forEach(([field, message]) => {
    //     const label = fieldLabels[field] || field
    //     toast.error(`${label}: ${message}`)
    //   })

      // Use error.response.data directly, not the errors state
      Object.entries(error.response.data).forEach(([field, message]) => {
        const label = fieldLabels[field] || field
        toast.error(`${label}: ${message}`)
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed inset-0 flex flex-col justify-center items-center text-center">
        <div className="bg-[#444141]/60 p-8 w-xs md:w-lg rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Create an Account
          </h2>
          <form className="flex flex-col gap-6" onSubmit={handleRegistration}>
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="password"
              value={password}
              placeholder="Set password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button disabled={loading} type="submit" className="text-sm">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
