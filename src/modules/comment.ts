import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentAPI } from "../apis/request";

const initialState = {
  comment: [],
};

export const getComment = createAsyncThunk(
  "GET_COMMENT_LIST",
  async (_, thunkAPI) => {
    try {
      const { data } = await commentAPI.getCommentList();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getComment.pending, (state) => {});
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    // builder.addCase(getComment.rejected, (state) => {});
  },
});

export default commentSlice.reducer;
