import { React, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostModel from '../../models/post';
import user from '../../controller/User';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import firebase from '../../firebase';

function PostEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    user.isLoggedIn().then((res) => {
        if (!res) {
            navigate('/');
            exit();
        }
    })
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [isPublic, setPublic] = useState(false);
    const [isAnonymous, setAnonymous] = useState(false);

    const deleteSubmit = async () => {
        const docRef = doc(firebase.db, "posts", id);
        deleteDoc(docRef);
        navigate("/");
    }; 

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const func = async () => {
            const docRef = doc(firebase.db, "posts", id);
            const docSnap = await getDoc(docRef);
            if (docSnap) {
                setTitle(docSnap.data().title);
                setBody(docSnap.data().body);
                setPublic(docSnap.data().isPublic);
                setAnonymous(docSnap.data().isAnonymous);
            }
        };
        func();
    },[]); 

    const handlePublic = () => {
        setPublic(!isPublic);
    };
    const handleAnonymous = () => {
        setAnonymous(!isAnonymous);
    };
    
    const handleSubmit = async () => {

        //upload image and grab img url
        let update_doc = {
            title: title,
            body: body,
            isPublic: isPublic,
            isAnonymous: isAnonymous
        }

        const docRef = doc(firebase.db, "posts", id);
        setLoading(true);
        await updateDoc(docRef, update_doc);
        navigate("/post/" + id);
    }

    return (
        <main>
            <section className="vlx-post vlx-post--add wst--small">
                <div className="container">
                    <div className="inner vlx-form d-grid">
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Titel</h3>
                            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" />
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Afbeelding</h3>
                            <label for="file-input" className="vlx-file-input">
                                <p>Upload file</p>
                            </label>
                            <input onChange={(e) => setImage(e.target.value)} id="file-input" type="file" />
                        </div>
                        <div className='vlx-form__section vlx-sp-2'>
                            <h3 className='vlx-form__label'>Tekst <small>(markdown supported)</small></h3>
                            <textarea onChange={(e) => setBody(e.target.value)} value={body} ></textarea>
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Publiek</h3>
                            <label className="vlx-switch">
                                <input value={isPublic} onChange={handlePublic} type="checkbox" />
                                <span className="vlx-slider round"></span>
                            </label>
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Anoniem</h3>
                            <label className="vlx-switch">
                                <input value={isAnonymous} onChange={handleAnonymous} type="checkbox" />
                                <span className="vlx-slider round"></span>
                            </label>
                        </div>
                        <div className='vlx-form__section'>
                            <button className='vlx-form__submit btn btn--primary' onClick={handleSubmit}>Update</button>
                            <button className='vlx-form__submit btn btn--primary' onClick={deleteSubmit}>Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PostEdit
