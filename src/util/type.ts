export type contentInfo = {
  profile_Url: string;
  author: string;
  content: string;
  createdAt: string;
};

export type InitState = {
  comment: UpdateData[];
  eachPage: UpdateData[];
  page: number;
  editMode: boolean;
  detailId: number;
};

export type UpdateData = {
  id: number;
  profile_Url: string;
  author: string;
  content: string;
  createdAt: string;
};
