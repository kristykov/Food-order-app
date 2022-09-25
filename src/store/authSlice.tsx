import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      return {
        token: action.payload.token,
        isAuthenticated: true,
      };
    },

    logout() {
      return {
        token: "",
        isAuthenticated: false,
      };
    },
  },
});

export default authSlice.reducer;
