// import React from 'react';
// import "./Navbar.css";
// function Navbar() {
//   return (
//     <div className="Navbar">
//       <div className="Navbar-item">
//         <ul>
//           <li>
//             <a href="#">Why Answerbiosa</a>
//           </li>
//           <li>
//             <a href="#">Team</a>
//           </li>
//           <li>
//             <a href="#">Blog</a>
//           </li>
//           <li>
//             <a href="#">Donate</a>
//           </li>
//           <button class="btn-sign-up">Sign Up</button>
//           <li>
//             <button class="btn-sign-in">Sign In</button>
//           </li>
//         </ul>
//       </div>
//     </div>
    
//   );
// }

// export default Navbar;
//---------------------------------------------------------------------------------------------------------------------- 
// Language: javascript
// Path: frontend\src\component\Navbar\Navbar.js
import React from 'react'
import { Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink } from './NavbarElements'
const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to="/">
        Home
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/introduction" activeStyle> Why Answerbiosa </NavLink>
        <NavLink to="/team" activeStyle> Team </NavLink>
        <NavLink to="/blog" activeStyle> Blog </NavLink>
        <NavLink to="/donate" activeStyle> Donate </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signup" activeStyle> Sign Up </NavBtnLink>
        <NavBtnLink to="/signin" activeStyle> Sign In </NavBtnLink>
      </NavBtn>
    </Nav>
      
    </>
  )
}

export default Navbar
