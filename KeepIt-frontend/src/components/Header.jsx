import React, { useContext } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import toast from 'react-hot-toast'

const Header = () => {
  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('logged out')
    toast.success('Logged out')
    navigate('/login')
  }

  return (
    <div className="w-full flex justify-center py-4 z-20 bg-[#444141]/50">
      <NavigationMenu className="w-screen max-w-none flex justify-around">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link to="/" className="text-xl font-semibold">
              KeepIt
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          {isLoggedIn ? (
            <>
              <NavigationMenuItem>
                <Button
                  onClick={() => navigate('/dashboard')}
                  variant="outline"
                  className="text-xs md:text-[14px]"
                >
                  Dashboard
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="text-xs md:text-[14px] ml-2"
                >
                  Logout
                </Button>
              </NavigationMenuItem>
            </>
          ) : (
            <>
              <NavigationMenuItem>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  className="text-xs md:text-[14px]"
                >
                  Login
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={() => navigate('/register')}
                  className="ml-2 md:ml-4 text-xs md:text-[14px]"
                >
                  Register
                </Button>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header
