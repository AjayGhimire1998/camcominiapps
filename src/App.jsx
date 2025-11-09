import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";
function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
