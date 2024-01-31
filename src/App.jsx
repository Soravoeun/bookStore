import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Oeuvres from "./pages/Oeuvres";
import Layout from "./components/Layout";
import Book from "./pages/Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/app" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Oeuvres />} />
        <Route path="/books/:id" element={<Book />} />
      </Route>
    </Routes>
  );
}

export default App;
