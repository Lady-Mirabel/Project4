import { Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import memefi from "./assets/Major.webp";
import Services from "./components/services";
import Products from "./components/products";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/footer";
import LoginForm from "./components/LoginForm";
import Menu from "./components/menu";
import Home from "./components/home";
export default function App() {
  return (
    <div>
      {/* <img
        src={memefi}
        alt="memefi"
        className="fixed object-cover -z-10 w-full h-screen"
      /> */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Products />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="booknow" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
