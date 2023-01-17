import React from "react";
import styled from "styled-components";
import CommentListContainer from "../containers/CommentListContainer";
import FormContainer from "../containers/FormContainer";
import PageListContainer from "../containers/PageListContainer";

export const Main = () => {
  return (
    <MainContainer>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  max-width: 50vw;
  margin: 20vh auto;
  padding: 20px;
`;
