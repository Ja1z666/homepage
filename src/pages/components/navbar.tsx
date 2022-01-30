import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { transform } from "typescript";

function Navbar() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/" className="logo">
            ja1z?
          </NavLink>
        </div>
        <NavLinks />
        <DropdownMenu />
      </div>
    </header>
  );
}

function DropdownMenu(props:any){
  const [open, setOpen] = useState(false);

  const style = useSpring({
    transform: open ? 'translate(0px, 0px)' : 'translate(10px, -10px)',
    opacity: open ? 1 : 0
  });

  return(
    <>
      <button className="burger btn-reset" onClick={() => setOpen(!open)}><svg width="30px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/></svg></button>
      {open && (
        <animated.div className="dropdown-menu" style={ style }>
          <NavLink to="/" onClick={() => setOpen(!open)}>
            About
          </NavLink>
          <NavLink to="/works" onClick={() => setOpen(!open)}>
            Works
          </NavLink>
          <a href="https://github.com/Ja1z666/portfolio-website">
            View Source
          </a>
        </animated.div>
      )}
    </>
  )
}

function NavLinks(){
  return(
    <div className="nav-links">
      <NavLink to="/works">
        Works
      </NavLink>
      <a href="https://github.com/Ja1z666/portfolio-website" className="source"><svg className="git-icon" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg><p>Source</p></a>
    </div>
  )
}

export default Navbar;