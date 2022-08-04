import Navbar from "./components/Navbar";
import Preference from "./modules/Preferences";
import Terms from "./modules/Terms";
import { Routes, Route } from "react-router-dom";
import Funding from "./modules/Funding";
import Success from "./modules/Funding/Success";

function App() {
  return (
    <div className="container">
      
        <Navbar />
        <Routes>
          <Route path="/" element={ <Terms/> } />
          <Route path="/preference" element={ <Preference/> } />
          <Route path="/funding" element={ <Funding/> } />
          <Route path="/funding/success" element={ <Success/> } />
        </Routes>
      
    </div>
  );
}

export default App;
