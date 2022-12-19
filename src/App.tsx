import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/index";
function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
