import { createSlice } from '@reduxjs/toolkit';

export const flashMessageSlice = createSlice({
  name: 'flashMessage',
  initialState: {
    text: "",
    type: ""
  },
  reducers: {
    addFlashMessage: (state, action) => {
        state.text = action.payload.text
        state.type = action.payload.type
    },
    deleteFlashMessage: state => {
        state.text = ""
        state.type = ""
    }
  },
});

export const { addFlashMessage, deleteFlashMessage } = flashMessageSlice.actions;

export const selectText = state => state.flashMessage.text
export const selectType = state => state.flashMessage.type

export default flashMessageSlice.reducer;