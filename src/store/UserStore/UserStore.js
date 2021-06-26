import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
    imageUrl: ""
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.lastname = action.payload.lastname;
      state.role = action.payload.role.role;
    },
    logout: (state) => {
      state.name = '';
      state.lastname = '';
      state.email = '';
      state.password = '';
      state.token = '';
      state.role = '';
      state.imageUrl = '';
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer