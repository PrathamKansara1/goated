import Navbar from "./components/Navbar";
import Preference from "./modules/Preferences";
import Terms from "./modules/Terms";
import { Routes, Route } from "react-router-dom";
import Funding from "./modules/Funding";

function App() {
  return (
    <div className="container">
      
        <Navbar />
        <Routes>
          <Route path="/" element={ <Terms/> } />
          <Route path="/preference" element={ <Preference/> } />
          <Route path="/funding" element={ <Funding/> } />
        </Routes>
      
    </div>
  );
}

export default App;
