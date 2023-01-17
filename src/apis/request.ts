import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const commentAPI = {
  getCommentList: () => instance.get(`/comments`),
  getPage: (page: number) =>
    // TODO: limitPage(4)도 설정할까
    instance.get(
      // `/comments?_page=${totalPage}&_limit=${limitContent}&_order=desc&_sort=id`
      `/comments?_page=${page}&_limit=4&_order=desc&_sort=id`
    ),
};
