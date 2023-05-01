import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, LogOutUser } = useContext(AuthContext);

  return (
    <nav className='header w-screen'>
      <img src={logo} alt='' />
      <div className='flex items-center space-x-5'>
        <Link to='/'>Shop</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/inventory'>Inventory</Link>
        {user ? (
          <div className='flex items-center'>
            <p className='text-white'>{user.email}</p>
            <Link to='/profile'>Profile</Link>
            <li className='list-none cursor-pointer'>
              <a onClick={LogOutUser}>Logout</a>
            </li>
          </div>
        ) : (
          <>
            {" "}
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
