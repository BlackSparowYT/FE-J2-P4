import React, { useState } from 'react'
import firebase from '../../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Snackbar from '@mui/joy/Snackbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordBool, setShowPasswordBool] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const showPassword = () => {
        setShowPasswordBool(!showPasswordBool);
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(firebase.auth, email, password)
            navigate('/');
        } catch (err) {
            console.error(err);
            navigate('/');

        }
    }

    return (
        <main>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => { setOpen(false) }}
                color='danger'
            >
                Wrong password or email
            </Snackbar>
            <section className="vlx-login">
                <div className='container'>
                    <div className="inner">
                        <Card
                            sx={{
                                height: "60%",
                                width: "60%",
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >
                            <h1 className='login__title'>Login</h1>

                            <h3>Email</h3>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            <h3>Password</h3>
                            <Input
                                type={showPasswordBool ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                endDecorator={
                                    <IconButton onClick={showPassword}>
                                        {showPasswordBool ? (
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEye} />
                                        )}
                                    </IconButton>
                                }
                            />
                            {errorMessage && (
                                <div style={{ color: 'red', marginTop: '10px' }}>
                                    {errorMessage}
                                </div>
                            )}
                            <div className="btn-group">
                                <Button
                                    variant="solid"
                                    sx={{
                                        width: "50%",
                                        backgroundColor: "#255c0a",
                                        ":hover" : {
                                            backgroundColor: "#255c0a",
                                        },
                                        }}
                                    onClick={signIn}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="outlined"

                                    sx={{
                                        width: "50%",
                                        color: "#255c0a",
                                        borderColor: "#255c0a",
                                    }}
                                    onClick={() => navigate('/account/register')}
                                >
                                    Registreer
                                </Button>
                                <Link to={"/"}>home</Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login
