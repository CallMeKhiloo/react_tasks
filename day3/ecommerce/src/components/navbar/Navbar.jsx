import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <NavLink to="/" className="link text-xl font-bold text-gray-800">
          E-Commerce
        </NavLink>
        <NavLink to="/products" className="link text-xl font-bold text-gray-800">
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
