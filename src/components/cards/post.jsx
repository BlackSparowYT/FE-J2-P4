import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserController from '../../controller/User';

function CardPost(props) {

    const [userName, setUserName] = useState("");

    const id = props.args.id;
    const args = props.args.data;

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await UserController.getUserNameById(args.userId);
            setUserName(name);
        };

        fetchUserName();
    }, []);

    let unix_timestamp = args.date;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
        <Link to={"/post/" + id} className='vlx-card vlx-card--post'>
            <div className='vlx-card__header'>
                <a href={'/profiles/' + args.userId} className='vlx-card__user'>{userName}</a>
                <p className='vlx-card__time'>{formattedTime}</p>
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

export default CardPost;