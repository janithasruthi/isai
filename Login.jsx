import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { __AUTH } from './../Backend/Firebase';


const Login = () => {
      let initiallLoginData={
        email:"",
        password:""
      }

      let [Eye , setEye] =useState(false)
      let handleEye = () =>{
        setEye(!Eye)
      }
      let [LoginData, setLoginData]=useState(initiallLoginData);
      let [loading, setloading]=useState(false);
      let navigate=useNavigate()

      let {email,password}=LoginData;

      let handleChange=(event)=>{
            let {name, value}=event.target;
            setLoginData({...LoginData,[name]:value})

      }
      let handleSubmit= async (e)=>{
        e.preventDefault();
        try{
        let userData= await signInWithEmailAndPassword(__AUTH,email,password)
         console.log(userData)
         if(userData.user.emailVerified){
          toast.success(`${email} has successfully logged in`)
          navigate("/Home")
         }
         else{
          toast.error(`${email} has not verified`)
         }
        }
         catch(err){
                toast.error(err.message)
         }
         finally{
          setLoginData(initiallLoginData)
          setloading(false)
         }

      }

  return (
    <section className='w-full bg-[#3AA6B9] h-[90vh] flex justify-evenly items-center  '>
        <article className='h-[400px] w-[400px] bg-[#FF9EAA] text-3xl text-white rounded-md'>
          <form className='h-[400px] flex  flex-col items-center justify-evenly' onSubmit={handleSubmit}>
          <h2 className='text-center font-extrabold text-3xl py-2.5 border-b-4 border-[#F6FCDF]'>LOG IN</h2>
            <section className='flex  flex-col'>
                    <label htmlFor='email' className='font-bold text-xl '>Email</label>
                    <input type='text' id='email' name='email' className='h-[45px] border-4 border-[#F6FCDF] rounded-lg' value={email} onChange={handleChange}/>
            </section>
            
            <section className='flex  flex-col'>
                    <label htmlFor='password' className='font-bold text-xl '> Password</label>
            <div className='flex relative items-center'>
                    <input type={Eye?"text":"password"} id='password' name='password' className='h-[45px] border-4 border-black rounded-lg' value={password} onChange={handleChange}/>
                    <div className='absolute right-3'onClick={handleEye}>
                      {Eye?<FaEye />:<FaEyeSlash />}
                    </div>
            </div>
            </section>

            <section>
              <button className='h-[50px] bg-black text-xl text-white text-center w-[140px] rounded-lg mt-5 font-bold'>LOGIN</button>
                <div className='h-[45px] bg-slate-300 w-[140px] flex items-center justify-evenly mt-2'>
                  <button className='h-[38px] bg-black text-white w-[38px] border-[50%] rounded-md items-center'>
                            {loading?"...":"L"}
              </button>
                </div>
            </section>
            
            <section>
                <div className='text-[15px] h-[45px] text-white flex justify-around items-center gap-10'>
                      <NavLink to="/Register"><h1 className='font-bold'>Don't have an account?</h1></NavLink>
                      <NavLink to="/ForgotPassword"><h1 className='font-bold'>Forget Password</h1></NavLink>
                </div>
            </section>
            </form>
        </article>
    </section>
  )
}

export default Login;