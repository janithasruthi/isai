import React from 'react'
import { NavLink } from 'react-router-dom';
import Myaccount from './Myaccount';
import { RiAccountCircleFill } from "react-icons/ri";
import Addprofile from './Addprofile';
import { IoIosPersonAdd } from "react-icons/io";
import { updateProfile } from 'firebase/auth';
import { MdBrowserUpdated } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const ProfileSideBar = () => {
  return (
    <section className='basis-[18%] bg-black text-amber-50'>
         <nav>
            <ul className='flex flex-col p-1 cursor-pointer text-white'>
                   <li>
                    <NavLink to="/profile" className="p-3 hover:bg-slate-700 w-full flex gap-2 items-center">
                        <span className='text-3xl'>
                        <RiAccountCircleFill/>
                        </span>
                        Myaccount
                    </NavLink>
                   </li>
                   <li>
                    <NavLink to="/profile/addprofile" className="p-3 hover:bg-slate-700 w-full flex gap-2 items-center">
                        <span className='text-3xl'>
                        <IoIosPersonAdd /> 
                        </span>
                        Addprofile
                    </NavLink>
                   </li>
                   <li>
                    <NavLink to="/profile/Updateprofilephoto" className="p-3 hover:bg-slate-700 w-full flex gap-2 items-center">
                        <span className='text-3xl'>
                        <MdBrowserUpdated />
                        </span>
                        UpdateProfilePhoto
                    </NavLink>
                   </li>
                   <li>
                   <NavLink to="/profile" className="p-3 hover:bg-slate-700 w-full flex gap-2 items-center">
                        <span className='text-3xl'>
                        <IoSettings />
                        </span>
                        Settings
                    </NavLink>
                   </li>
            </ul>
         </nav>
    </section>
  )
}

export default ProfileSideBar;