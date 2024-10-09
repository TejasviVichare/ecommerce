import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import style from "./nav.css";
import { useCartContext } from "../contex/cart_context";

const Header = () => {
  const [menuIcon, setMenuIcon] = useState();

  const {total_item} = useCartContext();
  
  return (
    <div className="bg-slate-200">
      <div style={style} className={menuIcon ? "navbar active" : "navbar"}>
  
        <ul className="navbar-lists flex md:flex-row gap-4 flex-col py-4 md:pl-6 ">
          <li>
            <NavLink to="/"  onClick={() => setMenuIcon(false)} className="md:pl-16">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"  onClick={() => setMenuIcon(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products"  onClick={() => setMenuIcon(false)}>Products</NavLink>
          </li>
          {/* <li>
            <NavLink to="/contacts"  onClick={() => setMenuIcon(false)}>Contact</NavLink>
          </li> */}
          <li>
            <NavLink to="/cart"  onClick={() => setMenuIcon(false)}>cart <sup>{total_item}</sup> </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn text-right">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>


        
      </div>
    </div>
  );
};

export default Header;
