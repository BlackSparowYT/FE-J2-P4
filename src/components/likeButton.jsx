
import { Button } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import PostModel from '../models/post';
import { ThumbUp } from '@mui/icons-material';
import firebase from '../firebase';

const LikeButton = (props) => {

    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        const func = async () => {
            if (props.data.likes.includes(firebase.auth.currentUser.uid)) {
                setHasLiked(true);
            } else {
                setHasLiked(false);
            }
        };

        func();
    },[])

    const like = async () => {
        if (hasLiked) {
            PostModel.removeLike(props.id);
            setHasLiked(false);
        } else {
            PostModel.addLike(props.id);
            setHasLiked(true);
        }
    };

    return (
        <Button sx={{
            color: hasLiked ? "white" : "",
            backgroundColor: hasLiked ? "var(--background-500)" : "",
            ":hover": {
                backgroundColor: hasLiked ? "var(--background-300)" : "var(--background-300)",
            }
        }} onClick={like} endDecorator={<ThumbUp/>}>{props.data.likes ? props.data.likes.length : "0"}</Button>
    )
}

export default LikeButton