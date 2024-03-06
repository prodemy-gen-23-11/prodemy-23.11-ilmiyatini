import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "",
  user: {
    id: "",
    email: "",
    name: "",
    role: "",
  },
};

function getStoredAuthState() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    return {
      token,
      user: JSON.parse(userString),
    };
  }

  return { ...initialState };
}

const authReducer = createSlice({
  name: "auth",
  initialState: getStoredAuthState(),
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    setUser(state, action) {
      const { id, email, name, role } = action.payload;
      state.user.id = id;
      state.user.email = email;
      state.user.name = name;
      state.user.role = role;
      localStorage.setItem("user", JSON.stringify({ id, email, name, role }));
    },
    resetAuthData() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { ...initialState };
    },
  },
});

export const { setToken, setUser, resetAuthData } = authReducer.actions;
export default authReducer.reducer;
