import { React, useEffect, useState } from "react";
import { Button, Input, LinearProgress, Typography } from "@mui/joy";
import { useParams } from "react-router-dom";
import PostModel from "../../models/post";
import { doc, onSnapshot } from "firebase/firestore";

import firebase from "../../firebase";
import user from "../../controller/User";

function PostDetail() {
  const { id } = useParams();

  const [commentBody, setCommentBody] = useState("");
  const [postData, setPostData] = useState({});
  const [postRead, setPostRead] = useState(false);
  const [ comments, setComments] = useState([]);
  const submitComment = async () => {
    PostModel.addComment(id, commentBody);
    setCommentBody("");
  };

  useEffect(() => {
    return onSnapshot(doc(firebase.db, "posts", id), (doc) => {
      setPostData(doc.data());

      if (postData.comments) {
            const arr = doc.data().comments.map((element) => {
              return <div className="vlx-card">
                  <h3>{user.getUserNameById(element.uid).value}</h3>
                  <h4>{element.body}</h4>
              </div>;
            })
            setComments(arr)
        }
      setPostRead(true);
    });
  }, []);

  return (
    <main>
      {postRead ? (
        <div className="vlx-card">
          <h2>{postData.title}</h2>
          <p className="vlx-block--text">{postData.body}</p>
          <div className="vlx-form">
            <div className="vlx-form__section">
              <Input
                value={commentBody}
                onChange={(e) => {
                  setCommentBody(e.target.value);
                }}
              ></Input>
              <Button onClick={submitComment}>Comment</Button>
            </div>
            {
                comments.map((element) => {
                    return element;
                })
            }
          </div>
        </div>
      ) : (
        <LinearProgress />
      )}
    </main>
  );
}

export default PostDetail;
