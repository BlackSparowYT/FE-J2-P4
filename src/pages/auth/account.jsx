import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import user from '../../controller/User'
import Button from "@mui/joy/Button";


const Account = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await user.getUserName();
            setUserName(name);
        };

        fetchUserName();
    }, []);
    return (
        <>
            <main>

                <section className="vlx-account">
                    <div className='container'>
                        <h1>Account</h1>
                        <p>Welkom terug, <strong>{userName}</strong>!</p>
                        <Button
                            variant="outlined"

                            sx={{
                                width: "50%",
                                borderColor: "#255c0a",
                            }}
                            onClick={() => navigate('/auth/logout')}
                        >
                            Logout
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Account