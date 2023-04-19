import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <NavLink>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {!user && <Link to="/login">Login</Link>}

        {!user && <Link to="/signup">Sign up</Link>}
        {user && (
          <span className="user">
            <small>{user.email}</small>
            <button onClick={handleSignOut}>Sign Out</button>
          </span>
        )}
      </NavLink>
    </nav>
  );
};

export default Header;
