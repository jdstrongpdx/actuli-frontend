import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import NavBar from "./pages/NavBar.tsx";

function App() {

  return (
      <>

          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
