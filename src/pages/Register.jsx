import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CometChat } from "@cometchat-pro/chat";

let authKey = "9542d5b83937233298fa94c4dda7e21d3f3254cc";
const appID = "23180388d90eed40";
let region = "us";

const appSetting = new CometChat.AppSettingsBuilder()
	.subscribePresenceForAllUsers()
	.setRegion(region)
	.build();
CometChat.init(appID, appSetting).then(
	() => {
		console.log("Initialization completed successfully");
		// You can now call login function.
	},
	(error) => {
		console.log("Initialization failed with error:", error);
		// Check the reason for error and take appropriate action.
	}
);

function Register() {
	const [userInfo, setUserInfo] = useState({});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const register = async (e) => {
		e.preventDefault();
		if (userInfo.password !== userInfo.confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		if (
			!userInfo.email ||
			!userInfo.password ||
			!userInfo.confirmPassword ||
			!userInfo.name ||
			!userInfo.username
		) {
			setError("Please fill all the fields");
			return;
		}
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/register`,
				userInfo
			);
			const userCreated = res.data.user;
			const token = res.data.token;
			console.log(userCreated, token);
			var user = new CometChat.User(userCreated._id);
			user.setName(userInfo.username);
			CometChat.createUser(user, authKey).then(
				(user) => {
					console.log("user created", user);
				},
				(error) => {
					console.log("error", error);
				}
			);
			navigate("/login");
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}
	};
	return (
		<div className="min-h-screen flex flex-row justify-center items-center bg-white w-full">
			<div className="flex flex-col h-[700px] items-center w-[500px] justify-center rounded-md">
				<div className="bold font-semibold text-2xl">Sign up</div>
				<div className="flex flex-col w-full mt-10">
					<div className="flex flex-row items-center justify-center w-full">
						<form className="flex flex-col w-full" onSubmit={register}>
							<div className="text-sm font-semibold">Email</div>
							<input
								className="w-full h-[50px] px-3 rounded-md border border-gray-300 mt-2"
								type="text"
								placeholder="Email"
								onChange={(e) => {
									setUserInfo({ ...userInfo, email: e.target.value });
								}}
								value={userInfo.email}
							/>
							<div className="text-sm font-semibold">Name</div>
							<input
								className="w-full h-[50px] px-3 rounded-md border border-gray-300 mt-2"
								type="text"
								placeholder="Name"
								onChange={(e) => {
									setUserInfo({ ...userInfo, name: e.target.value });
								}}
								value={userInfo.name}
							/>
							<div className="text-sm font-semibold">UserName</div>
							<input
								className="w-full h-[50px] px-3 rounded-md border border-gray-300 mt-2"
								type="text"
								placeholder="UserName"
								onChange={(e) => {
									setUserInfo({ ...userInfo, username: e.target.value });
								}}
								value={userInfo.username}
							/>
							<div className="text-sm font-semibold mt-4">Password</div>
							<input
								className="w-full h-[50px] px-3 rounded-md border border-gray-300 mt-2"
								type="password"
								placeholder="Password"
								onChange={(e) => {
									setUserInfo({ ...userInfo, password: e.target.value });
								}}
								value={userInfo.password}
							/>
							<div className="text-sm font-semibold mt-4">Confirm Password</div>
							<input
								className="w-full h-[50px] px-3 rounded-md border border-gray-300 mt-2"
								type="password"
								placeholder="Confirm Password"
								onChange={(e) => {
									setUserInfo({ ...userInfo, confirmPassword: e.target.value });
								}}
								value={userInfo.confirmPassword}
							/>
							<div
								className="text-center mt-5 cursor-pointer"
								onClick={() => navigate("/login")}
							>
								Already have an account?
							</div>
							{error && (
								<div className="text-red-500 text-center mb-3">{error}</div>
							)}
							<div className="flex flex-row justify-center items-center">
								<button
									type="submit"
									className="bg-blue-500 text-white w-[200px] h-[50px] rounded-md"
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
