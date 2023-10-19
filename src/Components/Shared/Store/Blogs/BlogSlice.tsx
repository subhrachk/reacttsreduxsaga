import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './BlogState';
import { RootState } from "../../../../store";

const blogReducer = createSlice({
  name : 'blogs',
  initialState,
  reducers : {
    selectblogs: (state) => state
  }
});

export const {selectblogs} = blogReducer.actions;

export const SelectBlogs = (state : RootState) => state.blogs;

export default blogReducer.reducer;