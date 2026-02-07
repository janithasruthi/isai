import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FetchProfileContext } from '../ContextApi/FetchUserContext'
import { AuthContext } from '../ContextApi/ContextApi'



const Menu = () => {
  let {AuthUser,setAuthUser,logout}=useContext(AuthContext);

  console.log(AuthUser);
  let {role}=useContext(FetchProfileContext)
  let Anonymus=()=>{
    return(
      <section>
        <article>
          <ul className='flex gap-2 items-center justify-around text-amber-50'>
          <li className='text-amber-200 font-bold text-2xl hover:text-emerald-300'><NavLink to="/Login">Login</NavLink></li>
          <li className='text-amber-200 font-bold text-2xl hover:text-emerald-300'><NavLink to="/Register">Register</NavLink></li>
          </ul>
        </article>
      </section>
    )

  };
  let Authenticated=()=>{
    return (
      <>
      {role === "admin" && 
      (
        <NavLink to="/admin">
        <li className="font-extrabold text-3xl hover:text-amber-200 hover:text:emerald-300">
          Admin

        </li>
      </NavLink>

      )}
      
      <section className='flex items-center'>
        <article>
          <ul className='flex gap-5 items-center'>
            <NavLink to="/profile">
              <li className='flex items-center gap-4'>
                <img src={AuthUser.photoURL} className='h-[50px] w-[50px] rounded-[50%] ' />
                <p className='font-bold text-amber-200 text-2xl'>{AuthUser.displayName}</p>

              </li>
  
              
            </NavLink>
            <li className='text-3xl font-bold text-amber-200 hover:text-emerald-300' 
            onClick={logout}>
              logout
            </li>
            </ul>

        </article>
      </section>
      </>

    )
          
    
  }  
  
  return(
    <>
    <ul className='flex gap-5 items-center justify-around'>
      <NavLink to="/Home">
        <li className="font-extrabold text-3xl text-amber-200 hover:text-emerald-300">
          Home

        </li>
      </NavLink>
      {AuthUser?<Authenticated/>:<Anonymus/>}
    </ul>

    </>
  )
  
  
  
  
  //Dynamic Navlink will be performrd with multiple redering according to the conditions we specified
  //artist songname lyrics lyrists duration of that song 
  //download album
  
}

export default Menu;