import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./Components/Details";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/*"
          element={
            <p className="text-4xl text-center font-semibold from-red-600">
              Page Not Found
            </p>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
