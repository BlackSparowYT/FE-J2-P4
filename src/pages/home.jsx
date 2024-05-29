import { React, useEffect, useState } from 'react'
import PostsBlock from '../components/blocks/posts'

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // TODO: Noud; fetch posts from the database
        setPosts([
            {
                id: 1,
                user: 'username',
                time: '20 mei 10:32',
                title: 'Message title',
                body: 'Eos modi dolores 33 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
                image: 'https://via.placeholder.com/200',
            },
            {
                id: 2,
                user: 'username2',
                time: '20 mei 10:32',
                title: 'Message title',
                body: 'Eos modi dolores 33 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
            },
            {
                id: 3,
                user: 'username3',
                time: '20 mei 10:32',
                title: 'Message title',
                body: 'Eos modi dolores 33 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
                image: 'https://via.placeholder.com/200',
            }
        ])
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
