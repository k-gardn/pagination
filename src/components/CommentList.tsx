import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import {
  deleteComment,
  detailInfo,
  editFlag,
  getComment,
} from "../modules/commentSlice";

function CommentList() {
  const dispatch = useAppDispatch();

  const { eachPage } = useAppSelector((state) => state.commentSlice);
  console.log(eachPage);

  useEffect(() => {
    dispatch(getComment());
  }, [dispatch]);

  return (
    <>
      {eachPage?.map((comment: any, key: number) => {
        return (
          <form
            key={comment.id}
            // onSubmit={() => setEditMode(false)}
          >
            <Comment>
              <img src={comment.profile_url} alt="" />
              {comment.author}
              <CreatedAt>{comment.createdAt}</CreatedAt>
              <Content>{comment.content}</Content>
              <Button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // setIsEdit(true);
                    dispatch(detailInfo(comment?.id));
                    dispatch(editFlag(true));
                  }}
                >
                  수정
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    dispatch(deleteComment(comment?.id));
                  }}
                >
                  삭제
                </button>
              </Button>

              <hr />
            </Comment>
          </form>
        );
      })}
    </>
  );
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
