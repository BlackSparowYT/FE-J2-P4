import React from 'react';
import { Link } from "react-router-dom";

function Post(props) {

    const args = props.args;

    return (
        <Link to={"/messages/" + args.id} className='vlx-card vlx-card--post'>
            <div className='vlx-card__header'>
                <p className='vlx-card__user'>{args.user}</p>
                <p className='vlx-card__time'>{args.time}</p>
            </div>
            <div className='vlx-card__body'>
                <div className='vlx-content'>
                    <h3 className='vlx-content__title'>{args.title}</h3>
                    <p className='vlx-content__body'>{args.body}</p>
                </div>
                {
                    args.image ?
                        <div className='vlx-content vlx-content--image'>
                            <img src={args.image} alt='placeholder' />
                        </div>
                    : null
                }
            </div>
        </Link>
    );
}

export default Post;