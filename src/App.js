import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, UploadNotes } from "./pages";
import Quiz from "./pages/Quiz.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/uploadNotes" element={<UploadNotes />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
    </>
  );
}

export default App;
