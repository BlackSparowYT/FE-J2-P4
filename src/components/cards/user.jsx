import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserController from '../../controller/User';

function CardPost(props) {

    const id = props.args.uid;
    const args = props.args.data;

    return (
        <Link to={"/profiles/" + id} className='vlx-card vlx-card--post'>
            <div className='vlx-card__body'>
                <div className='vlx-content'>
                    <h3 className='vlx-content__title'>{args.displayName}</h3>
                </div>
            </div>
        </Link>
    );
}

export default CardPost;