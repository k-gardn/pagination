import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { createComment, updateComment } from "../modules/commentSlice";
import { UpdateData } from "../util/type";

function Form() {
  const dispatch = useAppDispatch();

  const { editMode, eachPage, detailId } = useAppSelector(
    (state) => state.commentSlice
  );

  const filtered = eachPage?.filter((item: any) => item?.id === detailId);
  const EditComment = filtered[0];
  console.log("Form >> EditComment", EditComment);

  const [profile_Url, setProfile_Url] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setcontent] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  console.log(editMode);

  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    // dispatch(editFlag(isEdit));
    setIsEdit(editMode);
  }, [dispatch, editMode, detailId]);

  useEffect(() => {
    if (isEdit) {
      setProfile_Url(EditComment?.profile_Url);
      setAuthor(EditComment?.author);
      setcontent(EditComment?.content);
      setcreatedAt(EditComment?.createdAt);
    }
  }, [dispatch, detailId, isEdit]);

  console.log(isEdit);

  const addCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    const formData = {
      id: EditComment?.id,
      profile_Url,
      author,
      content,
      createdAt,
    };
    if (isEdit) {
      dispatch(updateComment(formData));
    } else {
      dispatch(createComment(formData));
    }
  };

  return (
    <FormStyle>
      <form onSubmit={addCommentHandler}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profile_Url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfile_Url(e.target.value)
          }
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          // ref={contentRef}
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setcontent(e.target.value)
          }
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={createdAt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setcreatedAt(e.target.value)
          }
          required
        />
        <br />
        {isEdit ? (
          <button type="submit">완료</button>
        ) : (
          <button type="submit">등록</button>
        )}
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
