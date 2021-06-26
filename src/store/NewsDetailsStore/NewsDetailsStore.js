import { createSlice } from '@reduxjs/toolkit'

export const newsDetailsSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        content: "",
        image: "",
        categoryId: "",
        type: ''
    },
    reducers: {
        setName(state, action){
            state.name = action.payload;
        },
        setContent(state, action){
            state.content = action.payload;
        },
        setType(state, action){
            state.type = action.payload;
        },
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setImage(state, action){
            state.image = action.payload;
        },
        resetNewsDetails(state){
            state.name = '';
            state.content = '';
            state.type = '';
            state.image = '';
            state.categoryId = '';
        }
    }
})

// Action creators are generated for each case reducer function
export const { 
    setName,
    setCategoryId,
    setContent,
    setImage,
    setType,
    resetNewsDetails
} = newsDetailsSlice.actions;

export default newsDetailsSlice.reducer;