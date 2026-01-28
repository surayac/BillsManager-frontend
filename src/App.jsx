import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ChecklistPage from "./pages/ChecklistPage";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <NavBar></NavBar>
      <Footer></Footer>

      <Routes>
        <Route path="/" element={<ChecklistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
