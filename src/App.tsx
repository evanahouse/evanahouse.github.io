import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./fonts.css";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages/components */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
