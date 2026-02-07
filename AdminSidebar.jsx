import React from 'react'
import { NavLink } from 'react-router-dom';
import { RiAdminLine } from "react-icons/ri";
import { PiMusicNotesPlusFill } from "react-icons/pi";



const AdminSidebar = () => {
  return (
    <section className='w-[18%] min-h-[calc(100vh-75px)] bg-black  text-slate-700'>
      <article >
            <NavLink to="/admin/addAlbum" className="p-3 w-full flex gap-2 hover:bg-slate-700 items-center">              
             <div>
             <RiAdminLine  className='text-2xl font-bold text-white' />
             </div>
             <h1 className='text-white text-2xl hover:bg-slate-700'>Create Album</h1>
            </NavLink>
            <NavLink to="/admin/addSong" className="p-3 w-full flex gap-2 hover:bg-slate-700 items-center">              
             <div>
             <PiMusicNotesPlusFill  className='text-2xl font-bold text-white' />
             </div>
             <h1 className='text-white text-2xl hover:bg-slate-700'>Add Songs</h1>
            </NavLink>
      </article>
    </section>
  )
}

export default AdminSidebar;