import {
  CaseReducer,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { commentAPI } from "../apis/request";

const initialState = {
  comment: [],
  eachPage: [],
  page: 1,
  editMode: false,
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

export const getPagination = createAsyncThunk(
  "GET_PAGINATION",
  async (page: number, thunkAPI) => {
    try {
      console.log("page", page);
      const { data } = await commentAPI.getPage(page);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    presentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    editFlag: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(getPagination.fulfilled, (state, action) => {
      state.eachPage = action.payload;
    });
  },
});
export const { presentPage, editFlag } = commentSlice.actions;
export default commentSlice.reducer;
