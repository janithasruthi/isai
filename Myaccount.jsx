import React, {useContext} from 'react';
import { FetchProfileContext } from './../ContextApi/FetchUserContext';
import { NavLink } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaUserLargeSlash } from "react-icons/fa6";
import { AuthContext } from '../ContextApi/ContextApi';

const Myaccount = () => {           
  let {Authuser} = useContext(AuthContext) ;
  let {profile} = useContext(FetchProfileContext);
  
  return (
    <section className='flex justify-center items-center mt-5'>
      <article className="bg-slate-700 rounded-2xl p-5 w-[50vw] h-[70vh]">
        <header className='bg-white flex h-[80px] flex-col gap-14'>
          <div className='relative w-full bg-[#3AA6B9] rounded-2xl'>
            <img 
              src={Authuser?.photoURL} 
              alt='Profile'  
              className='h-[100px] w-[100px] rounded-full absolute top-[-50px] right-[270px]'
            />
          </div>
          <div className='flex flex-col justify-center items-center text-2xl text-black gap-4 font-extrabold '>
            <h1 className='py-6'>{Authuser?.displayName}</h1>
            <h1>{Authuser?.email}</h1>
            <NavLink to="/profile/addprofile" state={profile} className="py-3">
              <FaEdit className='h-[30px] w-[30px] text-center' />
            </NavLink>
          </div>
        </header>

        <section className='flex flex-col items-center p-3 mt-[220px] text-white'>
          {profile == null ? (
            <div>
              <h1 className='text-[30px] text-black font-bold'>User not Found</h1>
              <h1 className='text-[30px] text-black font-bold'><FaUserLargeSlash /></h1>
            </div>
          ) : (
            <section className='flex flex-col gap-5 items-center mt-5'>
              <article>
                <div>
                  <form className='flex flex-col gap-3 justify-evenly items-center p-2 border-4 border-black w-[500px] bg-slate-400'>
                    
                    <article className='flex justify-evenly bg-slate-700 p-3 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl p-3'>Name</h1>
                        <input
                          className="border-gray-300 rounded w-[200px] p-3"
                          type='text'
                          name='name'
                          id='name'
                          value={profile.firstname + " " + profile.lastname}
                          readOnly
                        />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-3 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl p-3'>DOB</h1>
                        <input
                          type='date'
                          name='dob'
                          className='p-3 border border-gray-300 rounded w-[200px]'
                          id="dob"
                          value={profile.dob}
                          readOnly
                        />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-5 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl p-3'>City</h1>
                        <input
                          type='text'
                          name='city'
                          id="city"
                          placeholder='city'
                          className='p-3 border border-gray-300 rounded w-[200px]'
                          value={profile.city}
                          readOnly
                        />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-5 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl pt-2.5'>State</h1>
                        <input
                          type='text'
                          name='state'
                          id="state"
                          placeholder='state'
                          className='p-3 border border-gray-300 rounded w-[200px]'
                          value={profile.state}
                          readOnly
                        />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-5 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl pt-2.5'>Address</h1>
                        <textarea
                          name='Address'
                          id="address"
                          placeholder='address'
                          className='p-3 border border-black rounded w-[200px]'
                          value={profile.address}
                          readOnly
                        ></textarea>
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-5 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl pt-2.5'>Language</h1>
                        <input
                          type='text'
                          name='language'
                          id="language"
                          placeholder='language'
                          className='p-3 border border-gray-300 rounded w-[200px]'
                          value={profile.language}
                          readOnly
                        />
                      </div>
                    </article>

                    <article className='flex justify-evenly bg-slate-700 p-5 rounded-w-[600px]'>
                      <div className='flex gap-2'>
                        <h1 className='font-extrabold text-2xl pt-3'>Age</h1>
                        <input
                          type='text'
                          name='age'
                          id="age"
                          placeholder='age'
                          className='p-3 border border-gray-300 rounded w-[200px]'
                          value={profile.age}
                          readOnly
                        />
                      </div>
                    </article>

                  </form>                      
                </div>
              </article>
            </section>
          )}
        </section>
      </article>
    </section>
  );
};

export default Myaccount;
