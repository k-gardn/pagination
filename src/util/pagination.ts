export const pagination = (contentList: any, contentPerPage: number) => {
  const totalContentLength = contentList.length;
  const totalPages = Math.ceil(totalContentLength / contentPerPage);
  return totalPages;
};
