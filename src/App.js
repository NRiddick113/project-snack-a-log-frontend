// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour.js";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import './app.css'
import { useState } from "react";
import Login from "./Components/Login";


function App() {
  const [showNav, setShowNav] = useState(true)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login funcNavi={setShowNav} />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route exact path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
