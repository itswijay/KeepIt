import React, { useEffect } from 'react'
import axioInstance from '@/axiosInstance'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Note = (props) => {
  return (
    <Card className="w-full max-w-sm h-[200px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.note}</p>
      </CardContent>
    </Card>
  )
}

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axioInstance.get('/protected-view')
        console.log('Success: ', response.data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchProtectedData()
  }, [])

  return (
    <>
      <div className="w-full min-h-screen pt-12 px-16 grid grid-cols-4 gap-6">
<Note title="Hello world" note="bla bla bla"/>
<Note />
<Note />
<Note />
      </div>
    </>
  )
}

export default Dashboard
