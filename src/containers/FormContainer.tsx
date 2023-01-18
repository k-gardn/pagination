import React from "react";
import Form from "../components/Form";
import { useAppSelector } from "../hook/useRedux";
// import { EditForm } from "../components/EditForm";

function FormContainer() {
  const { editMode, eachPage, detailId } = useAppSelector(
    (state) => state.commentSlice
  );
  const filteredList = eachPage.filter((item: any) => item.id === detailId);
  return <Form />;
  // return (editMode ? <EditForm filteredList={filteredList} /> : <Form />)
}

export default FormContainer;
