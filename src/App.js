/* 
  I used HashRouter here instead of BrowserRouter because Github pages don't support the Cliet-Side Routing. So, when refreshing the
  page, we'll get a 404 error but HashRouter will fix this problem.
  Anyway, we don't have to do this when using a custom domain!
*/
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  const homePage = <Link to="/">Home</Link>;
  const aboutPage = <Link to="/about">About</Link>;
  const portfolioPage = <Link to="/portfolio">Portfolio</Link>;
  const contactPage = <Link to="/contact">Contact</Link>;

  return (
    <Router>
      <Header
        homePage={homePage}
        aboutPage={aboutPage}
        portfolioPage={portfolioPage}
        contactPage={contactPage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
