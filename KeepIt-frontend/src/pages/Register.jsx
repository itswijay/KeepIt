import { Button } from '@/components/ui/button'
import React from 'react'

const Register = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center text-center">
        <div className="bg-[#444141]/60 p-8 w-xs md:w-lg rounded-2xl mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Create an Account
          </h2>
          <form className="flex flex-col gap-6">
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="text"
              placeholder="Enter username"
            />
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="bg-[#444141] p-2 rounded-sm placeholder:text-sm"
              type="password"
              placeholder="Set password"
            />
            <Button type="submit" className="text-sm">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
