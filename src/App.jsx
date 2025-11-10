import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="dark:bg-[#191919] dark:text-white flex flex-col">
      <DarkModeProvider>
        <Header />
        <main className="max-w-7xl grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
