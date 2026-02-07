import React from 'react'
import ProfileSideBar from './ProfileSideBar'
import Profilecontent from './Profilecontent'

const Profilecontainer = () => {
  return (
    <section className='flex bg-[#3AA6B9] h-[190vh] w-full'>
    <ProfileSideBar/>
    <Profilecontent/>
    </section>
  )
}

export default Profilecontainer;