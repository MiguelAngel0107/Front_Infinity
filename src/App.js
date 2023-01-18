import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/pages/review/Home";
import FAQ from "./containers/pages/views/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
