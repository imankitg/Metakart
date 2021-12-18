import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import SimpleContainer from "./components/SimpleContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PrimarySearchAppBar />
        {/* <SimpleContainer /> */}
        <Routes>
          <Route path="about" element={<Demo />} />
          <Route path="/" element={<SimpleContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
