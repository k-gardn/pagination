import { InitState } from "./../util/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentAPI } from "../apis/request";
import { contentInfo } from "../components/EditForm";

const initialState: InitState = {
  comment: [],
  eachPage: [],
  page: 1,
  editMode: false,
  detailId: 0,
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

export const createComment = createAsyncThunk(
  "CREAT_COMMENT",
  async (payload: contentInfo, thunkAPI) => {
    try {
      const { data } = await commentAPI.postComment(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (commentId: number, thunkAPI) => {
    try {
      const { data } = await commentAPI.deleteOne(commentId);
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
    detailInfo: (state, action: PayloadAction<number>) => {
      state.detailId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(getPagination.fulfilled, (state, action) => {
      state.eachPage = action.payload;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.comment.unshift(action.payload);
    });
    // builder.addCase(deleteComment.fulfilled, (state, action) => {
    //   state.comment = state.comment.filter(
    //     (comment) => comment.id !== action.payload.id
    //   );
    // });
  },
});
export const { presentPage, editFlag, detailInfo } = commentSlice.actions;
export default commentSlice.reducer;
