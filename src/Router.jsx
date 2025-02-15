import {Routes, Route} from "react-router-dom";
import NameDrawPage from "./assets/Pages/NameDrawPages";
import ContactPages from "./assets/Pages/ContactPages";
import Home from './assets/Pages/Home';
import NumberDrawPages from "./assets/Pages/NumberDrawPages";
import LoginPages from "./assets/Pages/LoginPages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPages />} />
      <Route path="/sorteio-de-nomes" element={<NameDrawPage />} />
      <Route path="/sorteio-de-numeros" element={<NumberDrawPages/>} />
      <Route path="/login" element={<LoginPages/>} />
    </Routes>
  );
};

export default Router;