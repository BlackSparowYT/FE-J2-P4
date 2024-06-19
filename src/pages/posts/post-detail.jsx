import { React, useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  IconButton,
  Input,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/joy";
import { useParams } from "react-router-dom";
import PostModel from "../../models/post";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";

import firebase from "../../firebase";
import user from "../../controller/User";
import Comment from "../../components/blocks/comment";
import { ThumbUp } from "@mui/icons-material";

function PostDetail() {
  const { id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  const [postData, setPostData] = useState({});
  const [postRead, setPostRead] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsUser, setcommentsUser] = useState([]);
  const [canComment, setCanComment] = useState(false);

  const submitComment = async () => {
    PostModel.addComment(id, commentBody);
    setCommentBody("");
  };

  useEffect(() => {
    const func = async () => {
      onSnapshot(doc(firebase.db, "posts", id), (doc) => {
        setPostData(doc.data());

        if (postData.comments) {
          const arr = doc.data().comments.map((element, index) => {
            return <Comment key={index} owner={id} index={index}  data={element} />;
          });
          setComments(arr);
        }
        setPostRead(true);
      });
      const isLoggedIn = await user.isLoggedIn();
      setCanComment(isLoggedIn);
    };
    func();
  });

  return (
    <main>
      {postRead ? (
        <>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              marginTop: "40px"
            }}
          >
            <Card
              sx={{
                width: "60%",
                padding: "16px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
              >
                <Typography level="h2">{postData.title}</Typography>
                <Typography>{postData.title}</Typography>
              </Stack>
              <Typography>{postData.body}</Typography>
            </Card>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: "60%"
              }}
              >
              <ButtonGroup size="lg">
                <IconButton>
                  <ThumbUp/>
                </IconButton>
              </ButtonGroup>
              <Input
                disabled={!canComment}
                value={commentBody}
                onChange={(e) => {
                  setCommentBody(e.target.value);
                }}
                endDecorator={<Button onClick={submitComment}>Comment</Button>}
              />
            </Stack>

            <Stack
              direction="column"
              alignItems="center"
              spacing={4}
              sx={{
                marginTop: "40px",
                width: "60%"
              }}
            >
              {comments.map((element) => {
                return element;
              })}
            </Stack>
          </Stack>
        </>
      ) : (
        <LinearProgress />
      )}
    </main>
  );
}

export default PostDetail;
