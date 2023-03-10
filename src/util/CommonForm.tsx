import styled from "styled-components";
import { contentInfo } from "./type";

export const CommonForm = (inputValue: contentInfo) => {
  const { profile_Url, author, content } = inputValue;

  return (
    <FormStyle>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profile_Url}
          required
        />
        <br />
        <input type="text" name="author" placeholder="작성자" value={author} />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={content}
          required
        ></textarea>
        <br />
        <input type="text" name="createdAt" placeholder="2020-05-30" required />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
};

export default CommonForm;

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
