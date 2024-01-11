import { LoginPage } from '@/components/Login'
import Image from 'next/image'

import { useAuth } from './layout'
import { useContext } from 'react'
import Login from './login/page'


export default function Home() {
  return (
    <div className='h-screen w-screen'>

        <Login/>
 
    </div>
  )
}
