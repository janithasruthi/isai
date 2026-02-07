import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { __DB } from '../Backend/Firebase'
import toast from 'react-hot-toast'
import { AuthContext } from '../ContextApi/ContextApi'
import { setDoc } from 'firebase/firestore'

const Addprofile = () => {
  let {AuthUser}=useContext(AuthContext)
  console.log(AuthUser)
  let {uid}=AuthUser || {};
  let location=useLocation();
  let navigate=useNavigate();
  let initialData={
    firstname:location?.state?.firstname,
    lastname:"",
    dob:"",
    state:"",
    city:"",
    address:"",
    language:"",
    age:"",
    gender:"",
    role:"user"
  }
  let [updateProfile,setupdateProfile]=useState(initialData);
  let {firstname, lastname, dob, state, city, address, language, age, gender, role}=updateProfile;
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setupdateProfile({...updateProfile, [name]:value})
  }

  let handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      let {displayName,photoURL,email,uid}=AuthUser;
      let payload={
        firstname,
        lastname,
        dob,
        gender,
        city,
        state,
        address,
        age,
        language,
        displayName,
        photoURL,
        email,
        uid,
        role,
      }
      let userCollection=doc(__DB,"user_Details",uid)
      await setDoc(userCollection,{...payload})
      toast.success(`Your profile data is stored successfully`)
      navigate("/profile")
    } 
    
    catch (err) {
      toast.error(err.message)
    }
    
  }


  return (
    <main>
      <section className='flex flex-col gap-5 items-center mt-5'>
        <hr className='border-slate-950 border-2 w-full'></hr>
        <h1 className='text-4xl text-slate-700 flex justify-center font-extrabold'>
          {""}
          ADD PROFILE</h1>
          <hr className='border-slate-950 border-2 w-full mb-5'></hr>
          <article className='bg-slate-300 h-full w-[55vw] rounded-md '>
            <form className='p-5'onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">First Name</h1>
                <input type="text" name="firstname" id="firstname" placeholder='Enter your First Name' onChange={handleChange} value={firstname} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">Last Name</h1>
                <input type="text" name="lastname" id="lastname" placeholder='Enter your Last Name' onChange={handleChange} value={lastname} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">Date of Birth</h1>
                <input type="date" name="dob" id="dob"  onChange={handleChange} value={dob} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <br></br>
              <div className='text-slate-200 flex justify-evenly px-3 py-4 rounded bg-slate-600 flex-col'>
                <div className=''>
                  <h1 className='flex  font-semibold text-2xl pb-3'>GENDER</h1>
                  <div className='flex gap-3'>
                    <input type="radio" name="gender" id="gender" value="male" onChange={handleChange} checked={gender=="male"}/>MALE
                    <input type="radio" name="gender" id="gender" value="female" onChange={handleChange}checked={gender=="female"}/>FEMALE
                    <input type="radio" name="gender" id="gender" value="others" onChange={handleChange}checked={gender=="others"}/>OTHERS
                  </div>
                </div>
                <br></br>
                <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">Age</h1>
                <input type="text" name="age" id="age" placeholder='Enter your Age' onChange={handleChange} value={age} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">City</h1>
                <input type="text" name="city" id="city" placeholder='Enter your City' onChange={handleChange} value={city} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <div className='flex flex-col gap-2 pb-2'>
                <h1 className="font-bold text-2xl text-slate-200 pt-2.5">State</h1>
                <input type="text" name="state" id="state" placeholder='Enter your State' onChange={handleChange} value={state} className='h-[35px] border-2 border-white text-yellow-200' />
              </div>
              <div>
              <h1 className="font-bold text-2xl text-slate-200 pt-2.5 pb-2">Address</h1>
              <textarea name="address" id="address" placeholder='Enter your Address' onChange={handleChange} value={address} className='h-[35px] border-2 border-white text-yellow-200 w-full'>

              </textarea>
              </div>
              <div>
              <h1 className="font-bold text-2xl text-slate-200 pt-2.5 pb-2">Language</h1>
              <input type="text" name="language" id="language" value={language} onChange={handleChange}  className='h-[35px] border-2 border-white text-yellow-200 w-full' />
              </div>
              <div className='flex justify-center items-center h-[80px] mt-15'>
                <button className='bg-slate-950 text-white hover:bg-white hover:text-slate-950 p-6 rounded-2xl font-bold'>
                  UPDATE PROFILE
                </button>
              </div>
              </div>
            </form>
          </article>
      </section>
    </main>
  )
}

export default Addprofile;