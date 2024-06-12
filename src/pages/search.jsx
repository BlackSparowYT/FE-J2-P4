import { set } from 'firebase/database'
import { React, useEffect, useState } from 'react'
import PostCard from '../components/cards/post'
import PostModel from '../models/post'

function Search() {


    const [schools, setSchool] = useState([])
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState();

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
        }
        fetchData()
    }, [])

    const args = {
        block: {},
        posts: posts
    }


    const filterItems = () => {
        if (!search) {
            return posts;
        } else {
            return posts.filter(post => {
                return post.data.title.toLowerCase().includes(search) || post.data.body.toLowerCase().includes(search);
            });
        }
    }

    return (
        <main>
            <section className='vlx-search wst--small'>
                <div className="container">
                    <div className="vlx-header wsb--small">
                        <h1>Zoeken</h1>
                        <input onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder='Zoeken...' />     
                    </div>
                    <div className="inner d-grid g-20">
                        {filterItems().map((item) => (
                            <PostCard key={item.id} args={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search
