import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Icon from "./components/Icon/Icon";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import NoPage from "./pages/NoPage";

function Layout({ children }) {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      {isHomeRoute && <Navbar />}
      {children}
      <Icon />
      {isHomeRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
