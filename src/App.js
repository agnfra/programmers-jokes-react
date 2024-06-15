import "./App.css";
import { mems } from "./components/MemArray";
import { MemsLogic } from "./components/MemsLogic";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { useState } from "react";

function App() {
  const [memes, setMemes] = useState(mems);

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigation">
          <h1>Programmers jokes</h1>
          <button className="regularButton">
            <Link to="/">Regular</Link>
          </button>
          <button className="hotButton">
            <Link to="/hot">Hot</Link>
          </button>
        </nav>
        <div className="buttonAppContainer">
          <Routes>
            <Route
              path="/"
              element={
                <MemsLogic memes={memes} isHot={false} setMemes={setMemes} />
              }
            />
            <Route
              path="/hot"
              element={
                <MemsLogic memes={memes} isHot={true} setMemes={setMemes} />
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
