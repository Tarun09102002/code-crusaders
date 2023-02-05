import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//define a service user to base url

const appApi = createApi({
	reducerPath: "appApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080",
	}),
	endpoints: (builder) => ({
		signupUser: builder.mutation({
			query: (user) => ({
				url: "/register",
				method: "POST",
				body: user,
			}),
		}),
		loginUser: builder.mutation({
			query: (user) => ({
				url: "/login",
				method: "POST",
				body: user,
			}),
		}),

		//logout
		logoutUser: builder.mutation({
			query: (payload) => ({
				url: "/logout",
				method: "DELETE",
				body: payload,
			}),
		}),
	}),
});

export const {
	useSignupUserMutation,
	useLoginUserMutation,
	useLogoutUserMutation,
} = appApi;

export default appApi;
