import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_WELCOME_TEXT } from '../../consts/const';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com",
    welcomeText: DEFAULT_WELCOME_TEXT,
    imageUrl: "",
    adress: "",
    phone: ""
  },
  reducers: {
    saveHomeData: (state, action) => {
      state.phone = action.payload.phone;
      state.adress = action.payload.adress;
      state.imageUrl = action.payload.image;
      state.welcomeText = action.payload.welcomeText;
      state.facebook = action.payload.media[0].facebook;
      state.instagram = action.payload.media[0].instagram;
      state.linkedin = action.payload.media[0].linkedin;
    }
  }
})

export const { getImageUrl, saveHomeData } = homeSlice.actions;

export default homeSlice.reducer;