import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { __AUTH } from '../Backend/Firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    let initialregisterdata={
        username:"",
        email:"",
        createpassword:"",
        confirmpassword:""
    }
    let[Eye,setEye]=useState(false)
      let handleEye =()=>{
        setEye(!Eye)
     }    
    let navigate=useNavigate();
    let [loading,setloading]=useState(false)
    let[registerdata,setregisterdata]=useState(initialregisterdata);
    let {username,email,createpassword,confirmpassword}=registerdata;
    let handlechange=(event)=>{
     let{name,value}=event.target;
     setregisterdata({...registerdata,[name]:value})
    }
    let handlesubmit= async (event)=>{
          event.preventDefault();
          setregisterdata(initialregisterdata);        
        try { 
            if(createpassword==confirmpassword){
            let userdetails=await createUserWithEmailAndPassword
            (__AUTH,email,confirmpassword)
          console.log(userdetails)
          await sendEmailVerification(userdetails.user)
          console.log("email verified")
           toast.success(`you have successfully register with ${email}`)
           navigate("/Login");
          updateProfile(userdetails?.user,{
            displayName:username,
            photoURL:"https://images.unsplash.com/photo-1742268351241-b1b2ccae70c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })
       
        }
          else{
            toast.error(`create and confirm password is not matching`)
            
          }
          
       }
       catch(err){
        toast.error(err.slice)
       }
       finally{
        setregisterdata(initialregisterdata)
        setloading(false);
       }
    }
  return (
    <section className='w-[full] bg-[#3AA6B9] h-[100vh] flex px-5 justify-evenly'>
    <article className='h-[550px] w-[400px] bg-[#FF9EAA] text-3xl text-white'>
        <h2 className='text-3xl font-bold text-center py-2.5 border-b-4'>Register Form</h2>
        <form className='h-[400px]flex px-5 justify-evenly flex-col'onSubmit={handlesubmit}>
            <section className='w-[full] flex px-5 justify-around flex-col'>
                <label htmlFor='username' className='text-2xl font-bold'>UserName</label>
                <input type='text' id='username' name='username' className='h-[45px] border-4 border-[#EEEEEE]'value={username} onChange={handlechange}/>
            </section>
            <section className='w-[full] flex px-5 justify-around flex-col'>
                <label htmlFor='email' className='text-2xl font-bold'>Email</label>
                <input type='email' id='email' name='email' className='h-[45px] border-4 border-[#EEEEEE]'value={email} onChange={handlechange} />
            </section>
            <section className='w-[full] flex px-5 justify-around flex-col'>
                <label htmlFor='createpassword' className='text-2xl font-bold'>Create Password</label>
               <div className='felx relative'>
                <input type={Eye?"text":"password"} id='createpassword' name='createpassword'value={createpassword} className='h-[45px] border-4 border-[#EEEEEE] w-[320px]' onChange={handlechange} />
                <div onClick={handleEye} className='absolute right-1 bottom-2 text-white'>
                              {Eye?<FaEye />:<FaEyeSlash />}
                            </div>
                            </div>
            </section>
            <section className='w-[full] flex px-5 justify-around flex-col'>
                <label htmlFor='confirmpassword' className='text-2xl font-bold'>Confirm Password</label>
                <input type='password' id='confirmpassword' name='confirmpassword' value={confirmpassword} className='h-[45px] border-4 border-[#EEEEEE]' onChange={handlechange} />
            </section>
            <br></br>
            <section className=' pl-20 px-5 flex items-cente'>
                <button className='h-[75px] w-[200px] bg-black text-white  font-bold rounded-md px-5'> REGISTER</button>
                </section>
                <section>
               <div className='w-[68px] flex items-center justify-around bg-slate-300 flex-col'>
                   <button className='h-[38px] bg-white text-black w-[38px] border-[50%] rounded-md'>
                    {loading?"...":"R"}
                   </button>
               </div>
            </section>
        </form>
    </article>
</section>
  )
}

export default Register;