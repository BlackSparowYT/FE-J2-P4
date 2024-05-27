import { set } from 'firebase/database'
import { React, useEffect, useState } from 'react'
import PostCard from '../components/cards/post'

function Search() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // TODO: Noud; fetch posts from the database
        setPosts([
            {
                id: 1,
                user: 'username1',
                time: '20 mei 10:32',
                title: 'Message title 1',
                body: 'Eos modi dolores 33 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
                image: 'https://via.placeholder.com/200',
            },
            {
                id: 2,
                user: 'username2',
                time: '20 mei 10:32',
                title: 'Message title 2',
                body: 'Eos modi dolores 22 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
            },
            {
                id: 3,
                user: 'username3',
                time: '20 mei 10:32',
                title: 'Message title 3',
                body: 'title 1 Eos modi dolores 11 odit perspiciatis et doloremque temporibus. Est labore temporibus ut ipsam quia quo officiis perferendis ut eaque unde et dicta nihil eos molestias voluptate.',
                image: 'https://via.placeholder.com/200',
            }
        ])
    }, [])

    const [schools, setSchool] = useState([])

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

    const [search, setSearch] = useState();
    /* const fetchData = async () => {
        await axios.get("https://api.coincap.io/v2/assets")
        .then(response => {
            setResponse(response.data.data); 
        })
        .catch(error => {console.error(error)});
    };

    useEffect(() => { fetchData(); }, []) */

    const filterItems = () => {
        if (!search) {
            return posts;
        } else {
            return posts.filter(post => {
                return post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search) || post.user.toLowerCase().includes(search);
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
