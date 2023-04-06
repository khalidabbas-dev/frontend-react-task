import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/Welcome/";
import { HomePage } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
