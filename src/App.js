import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, UploadNotes } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/uploadNotes" element={<UploadNotes />}></Route>
    </Routes>
  );
}

export default App;
