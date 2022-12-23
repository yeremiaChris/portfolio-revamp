import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/index";
import Navbar from "./components/layouts/Navbar";
function App() {
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
      <div className="background-gradient" />
    </div>
  );
}

export default App;
