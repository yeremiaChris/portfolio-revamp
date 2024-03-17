import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/index";
import Navbar from "./components/layouts/Navbar";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    let cleanUp = false;
    if (!cleanUp) {
      const html = document.documentElement;
      const theme = localStorage.theme;
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
    return () => {
      cleanUp = true;
    };
  }, []);

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Layout>
      <div className="dark:hidden" />
    </div>
  );
}

export default App;
