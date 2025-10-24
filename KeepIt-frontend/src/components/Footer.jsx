import React from 'react'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <>
      {/* <hr className="w-full border border-bottom border-[#444141]" /> */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 flex flex-col justify-center items-center py-2 bg-[#444141]/50">
        <p className="text-center text-xs pt-1">
          &copy; {year} Built with passion - Pubudu Wijesundara
        </p>
      </footer>
    </>
  )
}

export default Footer
