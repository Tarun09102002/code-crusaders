import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
		</Routes>
	);
}

export default App;
