import React from "react";
import Logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to='/'>
        <div className=" flex w-full justify-center items-center">
            <img src={Logo} className="w-[300px]" alt="" />
        </div>
    </Link>
  );
};

export default Navbar;
