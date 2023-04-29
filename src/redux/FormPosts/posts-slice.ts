import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
  username: string;
  title: string;
  content: string;
}

const initialState: PostState = {
  username: '',
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
