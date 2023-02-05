import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
import axios from "axios";
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

function Login() {
	const [userInfo, setUserInfo] = useState({});
	const navigate = useNavigate();
	const login = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/login`,
				userInfo
			);
			sessionStorage.setItem("userId", data.userId);
			CometChat.login(data.userId, authKey).then(
				(user) => {
					console.log("Login Successful:", { user });
				},
				(error) => {
					console.log("Login failed with exception:", { error });
				}
			);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="min-h-screen flex flex-row justify-center items-center bg-white w-full">
			<div className="flex flex-col h-[700px] items-center w-[500px] justify-center rounded-md">
				<div className="bold font-semibold text-2xl">Sign in</div>
				<div className="flex flex-col w-full mt-10">
					<div className="flex flex-row items-center justify-center w-full">
						<form className="flex flex-col w-full" onSubmit={login}>
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
							<div
								className="text-center my-5 cursor-pointer"
								onClick={() => navigate("/register")}
							>
								Don't have an account?
							</div>
							<div className="flex flex-row justify-center items-center">
								<button
									type="submit"
									className="bg-blue-500 text-white w-[200px] h-[50px] rounded-md"
								>
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
