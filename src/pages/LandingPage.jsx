import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function LandingPage() {
	const [notes, setNotes] = useState([]);
	const navigate = useNavigate();

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

	useEffect(() => {
		console.log(notes);
		if (notes.length > 5) {
			setNotes(notes.slice(0, 4));
		}
	}, [notes]);

	return (
		<div className="flex flex-col min-h-screen w-full">
			<div className="flex flex-row justify-between w-full h-[700px]">
				<div className="w-1/2 flex flex-row justify-center items-center">
					<div className="w-1/2 text-[#22223f] text-3xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</div>
				</div>
				<div className="w-1/2 flex flex-row">
					<img src="/landingpageillustration.jpg"></img>
				</div>
			</div>
			<div className="flex flex-row justify-center ml-10 items-center w-full h-[700px]">
				<div className="w-3/5 flex rounded-2xl justify-center flex-row bg-sky-100 h-[300px]">
					{notes.length > 0 ? (
						notes.map((note) => {
							return (
								<div className="flex flex-col justify-center items-center w-1/2">
									<Link to={note.fileData}>
										<img src="/noteicon.png" className="w-24 ml-4 mb-5"></img>
										<div className="flex flex-row justify-center items-center w-1/2 text-2xl ">
											{note.title}
										</div>
									</Link>
								</div>
							);
						})
					) : (
						<div className="flex flex-row justify-center items-center w-full h-full text-[#22223f] text-3xl">
							No notes found
						</div>
					)}
				</div>
				<div className="w-2/5 flex flex-row h-[300px] justify-start items-center">
					<div
						className="px-7 cursor-pointer py-2 ml-32 uppercase text-2xl bg-[#22223f] rounded-md text-white"
						onClick={() => navigate("/uploadNotes")}
					>
						Add Notes
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
