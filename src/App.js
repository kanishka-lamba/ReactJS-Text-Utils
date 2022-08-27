import { useState } from "react/cjs/react.development";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272c33";
      showAlert("Dark Mode Enabled", "light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route
              path="/"
              exact
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text to Analyze Below"
                  mode={mode}
                ></TextForm>
              }
            />

            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
