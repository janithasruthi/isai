import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { __AUTH } from '../Backend/Firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Forgotpassword = () => {

  let[email,setemail]=useState('');
  let navigate=useNavigate();
  let handlechange=(e)=>{
  setemail(e.target.value)
  }
  let handlesubmit=async(e)=>{
    e.preventDefault();
    try{
   await sendPasswordResetEmail(__AUTH,email)
   toast.success(`email link for reset is sent at ${email}`)
   navigate("/Login")
  }
  catch(err){
    toast.error(err.message)
  }
}
  return (
    <section class='w-[full h-[100vh] bg-amber-100 flex items-center justify-evenly'>
    <article className='w-[450px] h-[300px] bg-black'>
      <section className='w-[430px] h-[280px] border-4 border-amber-100 border-t-8 border-t-black border-r-0'>
        <h1 className='text-amber-100 text-center text-3xl font-extrabold'>RESET PASSWORD</h1>
        <section className='h-[230px] m-auto flex items-center justify-evenly'>
        <form action="" className='flex items-center justify-evenly flex-col gap-5' onSubmit={handlesubmit}>
          <input type="email" id='email' name="email" value={email} placeholder='Email Address' className='h-[45px] text-2xl text-amber-100 px-4 border-4 border-amber-100' onChange={handlechange}/>
          <button className='bg-amber-100 p-4 font-bold rounded-md'>Change Password</button>
        </form>
      </section>
      </section>
    </article>
  </section>
)
}


export default Forgotpassword;