import React from 'react'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center items-center py-2">
        <hr className="w-full border border-bottom border-[#444141]" />
        <p className='text-center text-xs pt-2'>&copy; {year} Built with passion - Pubudu Wijesundara</p>
      </footer>
    </>
  )
}

export default Footer
