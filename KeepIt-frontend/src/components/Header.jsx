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

const Header = () => {
  return (
    <div className='w-full flex justify-center py-4'>
      <NavigationMenu className='w-screen max-w-none flex justify-around'>
        <NavigationMenuList className=''>
          <NavigationMenuItem>KeepIt</NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button variant='outline'>Login</Button>
            <Button className='ml-4'>Register</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header