import { React, useEffect, useState } from 'react'

function PostAdd() {
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = () => {
        console.log('Verzenden')

        console.log(title);
        
    }

    return (
        <main>
            <section className="vlx-post vlx-post--add">
                <div className="container">
                    <div className="inner vlx-form">
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Titel</h3>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" />
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Titel</h3>
                            <textarea onChange={(e) => setBody(e.target.value)} ></textarea>
                        </div>
                        <div className='vlx-form__section'>
                            <h3 className='vlx-form__label'>Titel</h3>
                            <input onChange={(e) => setImage(e.target.value)}  type="file" />
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
