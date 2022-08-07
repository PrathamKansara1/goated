import Preference from "./modules/Preferences";
import Terms from "./modules/Terms";
import { Routes, Route } from "react-router-dom";
import Funding from "./modules/Funding";
import Success from "./modules/Funding/Success";
import Homepage from "./modules/HomePage/Homepage";

function App() {

  return (
    <div className="container">

        <Routes>
          <Route path="/" element={ <Terms/> } />
          <Route path="/preference" element={ <Preference/> } />
          <Route path="/funding" element={ <Funding/> } />
          <Route path="/funding/success" element={ <Success/> } />
          <Route path="/Home" element={ <Homepage/> } />
        </Routes>
      
    </div>
  );
}

export default App;
