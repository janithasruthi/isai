import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
<section className="h-[75px] bg-black">
    <article className="h-[75px] bg-black"> 
        <div className="flex justify-between ">
            <Logo/>
            <Menu/>
        </div>
    </article>
</section>
  )
}

export default NavBar;