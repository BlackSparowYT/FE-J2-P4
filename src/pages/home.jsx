import { React, useEffect, useState } from 'react'
import PostsBlock from '../components/blocks/posts'
import PostModel from '../models/post';

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            setPosts( await PostModel.getAll())
        }
        fetchData()
    }, [])

    const args = {
        block: {},
        posts: posts
    }

    return (
        <main>
            <PostsBlock args={args}/>
        </main>
    )
}

export default Home
