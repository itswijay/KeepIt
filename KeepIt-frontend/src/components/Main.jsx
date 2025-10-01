import React from 'react'
import { Button } from './ui/button'

const Main = () => {
  return (
    <div className="text-center w-full flex-1 flex items-center justify-center">
      <div className="bg-[#444141]/60 p-8 md:p-24 rounded-2xl">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Keep Your Notes safe
        </h1>
        <Button className='mt-4'>Login</Button>
      </div>
    </div>
  )
}

export default Main