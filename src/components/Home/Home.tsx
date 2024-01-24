import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import swirl from '../../assets/Swirl.svg'
import cubes from '../../assets/Cubes.svg'

export const Home = () => {
  return (
    <>
    <div className='relative top-0 left-0'>
        <Navbar />
        <img src={swirl} className='-z-50 absolute top-0 left-0 bg-elite-black' />
        <img src={cubes} className='-z-20 absolute top-0 left-0' />
        <Home />
      </div>
    </>
  )
}
