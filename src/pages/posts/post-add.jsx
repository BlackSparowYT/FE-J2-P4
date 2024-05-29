import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostModel from '../../models/post';
import user from '../../controller/User';

function PostAdd() {

    const navigate = useNavigate();

    /* user.isLoggedIn().then((res) => {
        if (!res) {
            navigate('/login');
            exit();
        }
    }) */
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [isPublic, setPublic] = useState(false);

    const handleCheckbox = () => {
        setPublic(!isPublic);
    };
    
    const handleSubmit = async () => {

        await user.login('jordi@gmail.com', 'testtest');

        //upload image and grab img url

        const imageUrl = 'https://via.placeholder.com/200';

        PostModel.create(title, body, imageUrl, 'schoolId', 'classId', isPublic)
        // TODO: change default to not public
        
    }

    return (
        <main>
            <section className="vlx-post vlx-post--add wst--small">
                <div className="container">
                    <div className="inner vlx-form d-grid">
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Titel</h3>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" />
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Tekst</h3>
                            <textarea onChange={(e) => setBody(e.target.value)} ></textarea>
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Afbeelding</h3>
                            <input onChange={(e) => setImage(e.target.value)} type="file" />
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Publiek</h3>
                            <input value={isPublic} onChange={handleCheckbox} type="checkbox" />
                        </div>
                        <div className='vlx-form__section'>
                            <button className='vlx-form__submit' onClick={handleSubmit}>Verzenden</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PostAdd
