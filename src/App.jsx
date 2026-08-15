import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Members from "./pages/Members";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        } 
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>

            <Footer />
    );
}

export default App;
