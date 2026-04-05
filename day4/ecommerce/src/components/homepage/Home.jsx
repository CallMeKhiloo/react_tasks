import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full h-screen flex items-center">
      <h1
        dir={language === "en" ? "ltr" : "rtl"}
        className="w-full text-4xl font-bold"
      >
        {language === "en"
          ? "Welcome to our E-commerce Store!"
          : "مرحبا بكم في متجرنا الإلكتروني!"}
      </h1>
    </div>
  );
};

export default Home;
