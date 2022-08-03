import Navbar from "./components/Navbar";
import Preference from "./modules/Preferences";
import Terms from "./modules/Terms";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      
        <Navbar />
        <Routes>
          <Route path="/" element={ <Terms/> } />
          <Route path="/preference" element={ <Preference/> } />
        </Routes>
      
    </div>
  );
}

export default App;
