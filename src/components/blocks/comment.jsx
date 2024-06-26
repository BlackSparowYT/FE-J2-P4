import { Card, Typography, Stack, ButtonGroup, IconButton } from "@mui/joy";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../../firebase";
import { DeleteForever } from "@mui/icons-material";
import user from "../../controller/User";
import PostModel from "../../models/post";

const Comment = (props) => {
  const [userName, setUserName] = useState([]);
  const [body, setBody] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const func = async () => {
      {
        const docRef = doc(firebase.db, "users", props.data.uid);
        const docSnap = await getDoc(docRef);
        setUserName(docSnap.data().displayName);
      }
      if (firebase.auth.currentUser) {
        const docRef = doc(firebase.db, "users", firebase.auth.currentUser.uid)
        const docSnap = await getDoc(docRef);
        setIsAdmin(docSnap.data().userType == "admin");
      }



      setIsAdmin(docSnap.data().userType == "admin");
    };
    func();
  }, []);

  return (
    <Card
      sx={{
        width: "80%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Stack>
          <Typography level="h4">{userName}</Typography>
          <Typography level="body-sm">{props.data.body}</Typography>
        </Stack>

        <Stack>
          <ButtonGroup>
            {(isAdmin &&
              <IconButton onClick={() => { PostModel.removeComment(props.owner, props.data) }}>
                <DeleteForever color="error" />
              </IconButton>
            )}
          </ButtonGroup>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Comment;
