import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Login,
	Register,
	UploadNotes,
	Library,
	LandingPage,
	Chat,
	Quiz,
	Notes,
} from "./pages";
import { Sidebar } from "./components/index";
// import {Quiz} from "./pages/Quiz";
import WebcamImage from "./pages/WebcamImage";

function App() {
	return (
		<>
			<WebcamImage />
			<Sidebar />
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/uploadNotes" element={<UploadNotes />}></Route>
				<Route path="/library" element={<Library />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/chat" element={<Chat />}></Route>
				<Route path="/quiz" element={<Quiz />}></Route>
				<Route path="/notes" element={<Notes />}></Route>
			</Routes>
		</>
	);
}

export default App;
