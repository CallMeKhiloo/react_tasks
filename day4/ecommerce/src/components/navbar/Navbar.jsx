import { NavLink } from "react-router";
import "./Navbar.css";
import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <nav className="navbar bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <NavLink to="/" className="link text-xl font-bold text-gray-800">
          {language === "en" ? "Home" : "الرئيسية"}
        </NavLink>
        <NavLink
          to="/register"
          className="link text-xl font-bold text-gray-800"
        >
          {language === "en" ? "Register" : "التسجيل"}
        </NavLink>
        <NavLink to="/contact" className="link text-xl font-bold text-gray-800">
          {language === "en" ? "Contact Us" : "اتصل بنا"}
        </NavLink>
        <NavLink
          to="/products"
          className="link text-xl font-bold text-gray-800"
        >
          {language === "en" ? "Products" : "المنتجات"}
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="link text-3xl ">
            <FaShoppingCart />
          </NavLink>
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
