import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PostModel from '../../models/post'
import PostsBlock from '../../components/blocks/posts'
import user from '../../controller/User'
import Button from "@mui/joy/Button";


const Account = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await user.getUserName();
            setUserName(name);
        };

        fetchUserName();
    }, []);


    

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            setPosts( await PostModel.getAllByLoggedInUser())
        }
        fetchData()
    }, [])

    const args = {
        block: {
            title: "<h3>Mijn posts</h3>"
        },
        posts: posts
    }

    return (
        <>
            <main>
                <section className="vlx-account">
                    <div className="container">
                        <h1>Mijn account</h1>
                    </div>
                </section>
                <PostsBlock args={args}/>
            </main>
        </>
    )
}

export default Account