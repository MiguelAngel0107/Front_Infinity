import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./containers/pages/review/Home";

import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";

import Servicios from "./containers/pages/review/Servicios";
import Productos from "./containers/pages/review/Productos";
import Paquetes from "./containers/pages/review/Paquetes";
import Proyectos from "./containers/pages/review/Proyectos";
import Contacto from "./containers/pages/review/Contacto";

import FAQ from "./containers/pages/views/FAQ";
import NotFound from "./containers/pages/views/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/paquetes" element={<Paquetes />} />
          <Route exact path="/proyectos" element={<Proyectos />} />
          <Route exact path="/contacto" element={<Contacto />} />

          <Route exact path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
