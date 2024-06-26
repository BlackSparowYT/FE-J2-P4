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
import { useNavigate, useParams } from "react-router-dom";
import PostModel from "../../models/post";
import { collection, deleteDoc, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";

import firebase from "../../firebase";
import user from "../../controller/User";
import Comment from "../../components/blocks/comment";
import { Delete, Edit, EditAttributes, ThumbUp } from "@mui/icons-material";
import LikeButton from "../../components/likeButton";

function PostDetail() {
  const { id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  const [postData, setPostData] = useState({});
  const [postRead, setPostRead] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsUser, setcommentsUser] = useState([]);
  const [canComment, setCanComment] = useState(false);
  const [posterName, setPosterName] = useState("");
  const [isMine, setIsMine] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const deleteSubmit = async () => {
    const docRef = doc(firebase.db, "posts", id);
    deleteDoc(docRef);
    navigate("/");
  }; 

  const submitComment = async () => {
    PostModel.addComment(id, commentBody);
    setCommentBody("");
  };


  useEffect(() => {
    const admin_check = async () => {
        const docRef = doc(firebase.db, "users", firebase.auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        setIsAdmin(docSnap.data().userType == "admin");
    };

    const func = async () => {
      onSnapshot(doc(firebase.db, "posts", id), (doc) => {
        setPostData(doc.data());

        if (doc.data().comments) {
          const arr = doc.data().comments.map((element, index) => {
            return <Comment key={index} owner={id} index={index} data={element} />;
          });
          setComments(arr);
        }
        setPostRead(true);
      });
      const isLoggedIn = await user.isLoggedIn();
      setCanComment(isLoggedIn);
      admin_check();
    };



    func();
  }, [comments]);

  useEffect(() => {
    const func = async () => {
      if (firebase.auth.currentUser) {
        if (firebase.auth.currentUser.uid === postData.userId) {
          setIsMine(true);
        }
      }
      const docRef = doc(firebase.db, "users", postData.userId);
      const snap = await getDoc(docRef);
      try {
        setPosterName(snap.data().displayName);
      } catch (error) {

      }
    }
    func();
  }, [postData])

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
                <Typography>{posterName}</Typography>
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
                {postData &&
                  <LikeButton id={id} data={postData} />
                }
                {
                  isMine &&
                  <Button onClick={() => navigate("/post/edit/" + id)}>
                    <Edit />
                  </Button>
                }
                {
                  isAdmin &&
                  <Button onClick={deleteSubmit}>
                    <Delete color="error"/>
                  </Button>
                }
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
