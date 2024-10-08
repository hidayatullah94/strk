import { Route, Routes } from "react-router-dom";
import "./App.css";
import { History, Home, Tutorial } from "./pages";
import { ButtonUP, Header, Kontak } from "./component";

function App() {
  return (
    <div className=" relative bg-white">
      <div className="fixed z-50 top-0 bg-slate-100">
        <Header />
      </div>
      <div className="relative top-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/tutorials" element={<Tutorial />} />
        </Routes>
        <ButtonUP />
        <Kontak />
      </div>
    </div>
  );
}

export default App;
