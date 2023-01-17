import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { getPagination, presentPage } from "../modules/commentSlice";
import { pagination } from "../util/pagination";

function PageList() {
  const dispatch = useAppDispatch();
  const [selectedPage, setSelectedPage] = useState(1);
  const pageArray = [];

  const { comment } = useAppSelector((state) => state.commentSlice);
  const totalPage = pagination(comment, 4);
  const { page } = useAppSelector((state) => state.commentSlice);

  useEffect(() => {
    setSelectedPage(page);
    dispatch(getPagination(selectedPage));
  }, [dispatch, selectedPage, page]);

  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(
      <Page
        className={`${selectedPage === i ? "select" : ""}`}
        onClick={() => {
          setSelectedPage(i);
          dispatch(presentPage(i));
        }}
        key={i}
      >
        {i}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  margin-right: 3px;
  cursor: pointer;
  :active {
    background-color: white;
  }
  &.select {
    color: #8819bc;
    background-color: white;
  }
`;
