import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const commentAPI = {
  getCommentList: () => instance.get(`/comments`),
  // getComments: (data: number) =>
  //   instance.get(`/comments?_page=${data}&_limit=4&_order=desc&_sort=id`),
  // addComment: (data: AddData) => instance.post(`/comments`, data),
  // getCommentDetail: (commentsId: number) => instance.get(`/comments/${commentsId}`),
  // updateComment: (data: UpdateData, commentsId: number) =>
  //   instance.put(`/comments/${commentsId}`, data),
  // deleteComment: (commentsId: number) => instance.delete(`/comments/${commentsId}`),
};
