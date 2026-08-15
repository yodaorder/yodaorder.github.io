import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/pages.css"
import "./styles/global.css"
import "./styles/admin.css"
import "./styles/components.css"

import "./index.css"


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
