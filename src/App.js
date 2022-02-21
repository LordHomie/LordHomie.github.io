import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home-components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
