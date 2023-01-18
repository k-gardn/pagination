import React, { ReactText, useRef, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../hook/useDebounce";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { createComment } from "../modules/commentSlice";

function Form() {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState({
    profileUrl: "",
    witter: "",
    content: "",
  });
  // const contentRef = useRef();
  const [profileUrl, setProfileUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setcontent] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  const { editMode } = useAppSelector((state) => state.commentSlice);
  console.log(editMode);

  const addCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    const formData = {
      profileUrl,
      author,
      content,
      createdAt,
    };
    dispatch(createComment(formData));
  };
  return (
    <FormStyle>
      <form onSubmit={addCommentHandler}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profileUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfileUrl(e.target.value)
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
        <button type="submit">등록</button>
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
