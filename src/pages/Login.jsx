import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
	const [userInfo, setUserInfo] = useState({});
	const navigate = useNavigate();
	const login = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_SERVER_URI}/login`,
				userInfo
			);
			sessionStorage.setItem("token", data.token);
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
