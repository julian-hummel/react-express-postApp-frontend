import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    addPost: (state, action) => {
        const post = { 
          postHeader: action.payload.header,
          postContent: action.payload.text,
          postCreator: action.payload.creator,
          created: Date.now(),
          postId: shortid.generate()
        }
        state.posts.push(post)
    },
    removePost: (state, action) => {
        const index = state.posts.indexOf(post => post.postId === action.payload.postId)
        state.posts.splice(index, 1)
    }
  },
});

export const { addPost, removePost } = postSlice.actions;
export const selectPosts = state => state.post.posts

export default postSlice.reducer;