import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostState {
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

const initialState: PostState = {
  username: '',
  created_datetime: '',
  title: '',
  content: ''
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostState>) => {
      state = action.payload;
    }
  }
});

export const { setPost } = postSlice.actions;

export const postReducer = postSlice.reducer;
