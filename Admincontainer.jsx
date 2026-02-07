import React from 'react'
import AdminSidebar from './AdminSidebar';
import AdminContent from './AdminContent';

const Admincontainer = () => {
  return (
   <section className='flex bg-[#3AA6B9] h-[150vh] w-full'>
    <AdminSidebar/>
    <AdminContent/>   
   </section>
  )
}

export default Admincontainer;