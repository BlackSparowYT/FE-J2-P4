import { React } from 'react';

function Message(props) {

    return (
        <div className="vlx-card vlx-card--message">
            {props.msg[0]}
        </div>
    )
}

export default Message
