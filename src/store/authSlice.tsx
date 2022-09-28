import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  // isAuthenticated: userIsLoggedIn,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true;
      // eslint-disable-next-line no-param-reassign
      state.token = action.payload;
      console.log(action.payload);
      localStorage.setItem("token", action.payload);
    },

    logout(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      console.log("works");
    },
  },
});

// export const isLoggedIn = (state: { auth: { isAuthenticated: boolean } }) => {
//   return state.auth.isAuthenticated;
// };

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
