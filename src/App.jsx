import "./App.css";
import { Homepage, Usa } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/usa" element={<Usa />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
