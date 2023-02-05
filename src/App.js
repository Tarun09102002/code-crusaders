import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Login,
	Register,
	UploadNotes,
	Library,
	LandingPage,
	Chat,
} from "./pages";
import { Sidebar } from "./components/index";

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/uploadNotes" element={<UploadNotes />}></Route>
				<Route path="/library" element={<Library />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/chat" element={<Chat />}></Route>
			</Routes>
		</>
	);
}

export default App;
