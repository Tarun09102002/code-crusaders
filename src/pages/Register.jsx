import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
	const [userInfo, setUserInfo] = useState({});
	const navigate = useNavigate();
	const register = async (e) => {
		e.preventDefault();
		try {
			console.log(userInfo);
			const { data } = await axios.post(
				`${process.env.REACT_APP_SERVER_URI}/register`,
				userInfo
			);
			localStorage.setItem("token", data.token);
			navigate("/");
		} catch (error) {
			console.log(error);
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
								className="text-center my-5 cursor-pointer"
								onClick={() => navigate("/login")}
							>
								Already have an account?
							</div>
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
