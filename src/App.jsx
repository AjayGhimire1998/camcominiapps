import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <DarkModeProvider>
        <div className="dark:bg-[#191919] dark:text-white min-h-screen">
          <Header />
          <main className="flex flex-row justify-center ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
