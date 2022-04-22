import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../partials/header'



const Home: NextPage = () => {
  return (
    <div className='flex'>
      <Header></Header>
      <aside>
        <h1 className='text-3xl font-bold underline'>Hello</h1>
      </aside>
    </div>
  )
}

export default Home
