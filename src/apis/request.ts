import axios from "axios";
import { contentInfo, UpdateData } from "../util/type";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const commentAPI = {
  getCommentList: () => instance.get(`/comments`),
  getPage: (page: number) =>
    instance.get(`/comments?_page=${page}&_limit=4&_order=desc&_sort=id`),
  postComment: (data: contentInfo) => instance.post(`/comments`, data),
  deleteOne: (commentId: number) => instance.delete(`/comments/${commentId}`),
  updateOne: (data: UpdateData) => instance.put(`/comments/${data.id}`, data),
};
