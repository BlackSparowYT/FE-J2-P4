import { set } from 'firebase/database'
import { React, useEffect, useState } from 'react'
import UserCard from '../components/cards/user'
import PostCard from '../components/cards/post'
import PostModel from '../models/post'
import UserController from '../controller/User'

function Search() {


    const [schools, setSchool] = useState([])
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState();

    const [result, setResult] = useState([])

    useEffect(() => {
        // TODO: Noud; fetch posts from the database
        setSchool([
            {
                id: 1,
                name: 'ROC nijmegen',
            },
            {
                id: 2,
                user: 'HAN nijmegen',
            },
            {
                id: 3,
                user: 'ROC leigraaf',
            }
        ])
    }, [])

    useEffect(() => {
        async function fetchData() {
            setPosts( await PostModel.getAll())
            setResult( await filterItems());
        }
        fetchData()
    }, [])

    const args = {
        block: {},
        posts: posts
    }


    const filterItems = async (search = null) => {
        if (!search) {
            //setResult(posts);
            return posts;
        } else {

            Promise.resolve(UserController.getUsersBySearch(search)).then((data) => {
                setUsers(data);
                console.log(data);
                console.log(users);
            }).catch((error) => {
                console.log(error);
            });


            const filterdPosts = posts.filter( post => { return post.data.title.toLowerCase().includes(search) || post.data.body.toLowerCase().includes(search); })
            return(
                filterdPosts.length > 0 ?
                    (
                        filterdPosts
                    )
                : 
                    (
                        users
                    )
            );

        }
    }

    return (
        <main>
            <section className='vlx-search wst--small'>
                <div className="container">
                    <div className="vlx-header wsb--small">
                        <h1>Zoeken</h1>
                        <input onChange={async (e) => setResult(await filterItems(e.target.value.toLowerCase()))} type="text" placeholder='Zoeken...' />     
                    </div>
                    <div className="inner d-grid g-20">
                        { result.map((item) => (
                            item.type == "user" ?
                                <UserCard key={item.uid} args={item} />
                            :
                                <PostCard key={item.id} args={item} />
                        )) }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search
