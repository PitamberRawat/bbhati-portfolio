import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Cases from "./components/Cases/Cases";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Casestudies from "./components/Casestudies/Casestudies";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <Router>
      <div className="site-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Content />
                <Cases />
              </>
            }
          />
          <Route path="/casestudies" element={<Casestudies />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
