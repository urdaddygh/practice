import { Registr } from "./pages/register/Registr";
import "./App.scss";
import { Route, Routes } from "react-router";
import { Main } from "./pages/Main";
import {Routing} from "./pages/auth/Routing";
import {NotRegistered} from "./pages/notRegistered/NotRegistered";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/*" element={<NotRegistered />} /> */}
        <Route path="/main/*" element={<Main />} />
        <Route path="/*" element={<Routing />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
