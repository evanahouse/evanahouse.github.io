import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import ThankYou from "./components/ThankYou/ThankYou";
import "./fonts.css";
import theme from "./theme";
import { updatePropertyAccessChain } from "typescript";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
