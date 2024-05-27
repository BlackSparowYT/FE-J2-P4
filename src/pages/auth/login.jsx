import * as React from "react";
import { useState } from "react";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPasswordBool, setShowPasswordBool] = useState(false);

    const showPassword = () => {
        setShowPasswordBool(!showPasswordBool);
    };

    return (
        <main>
            <section className="vlx-login vlx-account">
                <div className="container">
                    <div className="inner">
                        <Card
                            sx={{
                                height: "90%",
                                width: "90%",
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >
                            <h1>Login</h1>
                            <h3>Email</h3>
                            <Input type="email" />
                            <h3>Wachtwoord</h3>
                            <Input
                                type={showPasswordBool ? "text" : "password"}
                                endDecorator={
                                    <IconButton onClick={showPassword}>
                                        {showPasswordBool ? (
                                            <Visibility
                                                sx={{
                                                    width: "25px",
                                                    height: "25px",
                                                }}
                                            />
                                        ) : (
                                            <VisibilityOff
                                                sx={{
                                                    width: "25px",
                                                    height: "25px",
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                }
                            />

                            <div className="btn-group">
                                <Button
                                    variant="solid"
                                    sx={{
                                        width: "50%",
                                    }}
                                >
                                    login
                                </Button>
                                <Link to="/register">Registreer</Link>
                                <Link to="/">Home</Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;
