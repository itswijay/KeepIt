import React, { useContext } from 'react'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/components/AuthProvider'

const Home = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <div className="text-center w-full flex-1 flex items-center justify-center">
        <div className="bg-[#444141]/60 p-8 md:p-24 rounded-2xl">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Keep Your Notes safe
          </h1>
          {isLoggedIn ? (
                        <Button onClick={() => navigate('/dashboard')} className="mt-4">
              Explore Now
            </Button>
          ) : (
            <Button onClick={() => navigate('/login')} className="mt-4">
              Login
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
