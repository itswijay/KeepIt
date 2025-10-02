import React from 'react'
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

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full flex justify-center py-4 z-20">
      <NavigationMenu className="w-screen max-w-none flex justify-around">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link to="/" className='text-xl font-semibold'>KeepIt</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="text-xs md:text-[14px]"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate('/register')}
              className="ml-2 md:ml-4 text-xs md:text-[14px]"
            >
              Register
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header