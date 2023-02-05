import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Notes() {
	const [notes, setNotes] = useState([]);

	const fetchNotes = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/getNotes/${sessionStorage.getItem(
					"userId"
				)}`
			);
			setNotes(data.notes);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchNotes();
	}, []);

	return (
		<div className="flex flex-wrap min-h-screen w-full">
			<div className="mt-20 px-20 w-full min-h-[80vh]">
				{notes.length > 0 ? (
					notes.map((note) => {
						return (
							<div className="flex flex-col justify-center items-center">
								<Link to={note.fileData}>
									<img src="/noteicon.png" className="w-20  mb-5"></img>
									<div className="flex flex-row justify-center items-center  text-2xl ">
										Title: {note.title}
									</div>
									<div className="flex flex-row justify-center items-center  text-2xl ">
										Topics: {note.topic}
									</div>
								</Link>
							</div>
						);
					})
				) : (
					<div className="flex flex-row justify-center items-center w-full h-full text-[#22223f] text-3xl">
						No Notes Found
					</div>
				)}
			</div>
		</div>
	);
}

export default Notes;
