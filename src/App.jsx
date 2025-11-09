import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";
function App() {
  return (
    <div className="dark:bg-[#191919] dark:text-white">
      <DarkModeProvider>
        <Header />
        <Home />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
