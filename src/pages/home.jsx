import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/cards/messages';
import { set } from 'firebase/database';


function App() {

    const[messages, setMessages] = useState([]);

    setMessages([
        {
            id : 1,
            message : "Hello, world!"
        },
        {
            id: 2,
            message: "Goodbye, world!"
        }
    ]);

    return (
        <main>
            <section className="vlx-header vlx-header--home wst--small">
                <div className="container">
                    <div className="inner">
                        <Link to="" className="vlx-card vlx-card--top-nav active">
                            <h3>Hello</h3>
                        </Link>
                        <Link to="" className="vlx-card vlx-card--top-nav">
                            <h3>Hello</h3>
                        </Link>
                        <Link to="" className="vlx-card vlx-card--top-nav">
                            <h3>Hello</h3>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="vlx-block vlx-block--messages">
                <div className="container">
                    {messages.map((msg) => (
                        <Message key={msg.id} msg={msg.message} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default App
