import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import NavBar from "./pages/NavBar.tsx";

import ProfileView from "./pages/profile/ProfileView.tsx";
import ProfileEdit from "./pages/profile/ProfileEdit.tsx";

function App() {

  return (
      <>

          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile" element={<ProfileView />} />
                  <Route path="/profileEdit" element={<ProfileEdit />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
