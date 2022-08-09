import Preference from "./modules/Preferences";
import Terms from "./modules/Terms";
import { Routes, Route } from "react-router-dom";
import Funding from "./modules/Funding";
import Success from "./modules/Funding/Success";
import Homepage from "./modules/HomePage/Homepage";
import Account from "./modules/Account/Account";
import Markets from "./modules/Markets";
import BetForm from "./components/BetForm";

function App() {

  return (
    <div className="container">

        <Routes>
          <Route path="/terms" element={ <Terms/> } />
          <Route path="/preference" element={ <Preference/> } />
          <Route path="/funding" element={ <Funding/> } />
          <Route path="/funding/success" element={ <Success/> } />
          <Route path="/" element={ <Homepage/> } />
          <Route path="/account" element={ <Account/> } />
          <Route path="/markets" element={ <Markets/> } />
          <Route path="/mybets" element={ <BetForm/> } />
        </Routes>
      
    </div>
  );
}

export default App;
