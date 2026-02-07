import React from 'react'
import { Outlet } from 'react-router-dom';

const Profilecontent = () => {
  return (
    <section className='basis-[82%]'>
        <Outlet/>
    </section>
  )
}

export default Profilecontent;