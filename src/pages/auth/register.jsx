import React, { useState } from 'react'
import firebase from '../../firebase.js'
import User from '../../controller/User.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Snackbar from '@mui/joy/Snackbar';
import SchoolsModel from '../../models/schools.js';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setVerifyPassword] = useState('');
    const [schoolID, setSchoolID] = useState('');
    const [showPasswordBool, setShowPasswordBool] = useState(false);
    const [showVerifyPasswordBool, setShowVerifyPasswordBool] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const showPassword = () => {
        setShowPasswordBool(!showPasswordBool);
    };
    const showVerifyPassword = () => {
        setShowVerifyPasswordBool(!showVerifyPasswordBool);
    };

    const signUp = async () => {
        setLoading(true);
        if(!passwordCheck()) {
            return;
        }
        if (await schoolCheck() != true) {
            return;
        }
        const user = await User.signUp(userName, email, password, "student");
        if (user == true) {
            navigate("/");
        } else {
            setErrorMessage(user);
        }
        setLoading(false);
    }

    const schoolCheck = async () => {
        if (await SchoolsModel.exists(schoolID) != true) {
            setErrorMessage("School met dit ID bestaat niet");
            setLoading(false);
            return false;
        }
        return true;
    }

    const passwordCheck = () => {
        if (password !== verifypassword) {
            setErrorMessage("wachtwoorden komen niet overeen");
            setLoading(false);
            return false;
        }
        return true;
    }

    return (
        <main>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => { setOpen(false) }}
                color='danger'
            >
                verkeerd wachtwoord of email
            </Snackbar>
            <section className="vlx-login vlx-auth">
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
                            <h1 className='login__title'>Registreer</h1>


                            <h3>Email</h3>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            <h3>Gebruikers naam</h3>
                            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
                            <h3>Wachtwoord</h3>
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
                            <h3>verifieer wachtwoord</h3>
                            <Input
                                type={showVerifyPasswordBool ? "text" : "password"}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                endDecorator={
                                    <IconButton onClick={showVerifyPassword}>
                                        {showVerifyPasswordBool ? (
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEye} />
                                        )}
                                    </IconButton>
                                }
                            />
                            <h3>School ID</h3>
                            <Input
                                type={showVerifyPasswordBool ? "text" : "password"}
                                onChange={(e) => setSchoolID(e.target.value)}
                                endDecorator={
                                <IconButton onClick={showVerifyPassword}>
                                    {showVerifyPasswordBool ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                    )}
                                </IconButton>
                                }
                            />
                            {errorMessage && (
                                <div className='vlx-errors'>
                                    <p>
                                        {errorMessage}
                                    </p>
                                </div>
                            )}
                            <div className="btn-group">
                                <Button
                                    variant="solid"

                                    sx={{
                                        width: "50%",
                                        background: "#255c0a",
                                        borderColor: "#255c0a",
                                        ":hover": {
                                            backgroundColor: "#255c0a",
                                        },
                                    }}
                                    loading={isLoading}
                                    onClick={signUp}
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

export default Register
