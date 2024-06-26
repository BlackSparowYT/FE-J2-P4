import React from 'react'
import { useState, useEffect } from 'react'
import firebase from "../../firebase";
import Button from "@mui/joy/Button";
import userController from "../../controller/User";

const settings = () => {
    const [schoolID, setSchoolID] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return firebase.auth.onAuthStateChanged(user => {
            if (user.providerData[0].providerId === "google.com") {
                setUserName(user.displayName);
            } else {
                const fetchUserName = async () => {
                    const name = await userController.getUserName();
                    setUserName(name);
                };
                fetchUserName();
            }
            setLoading(false);
        });
    }, []);



    return (
        <main>
            <section className="vlx-account">
                <div className='container'>
                    <div className="inner">
                        <h2>Account</h2>
                        <div>

                        <h3>Vul hier je school ID in</h3>
                        <input type="text" id="schoolID" name="schoolID" placeholder={'school ID'} onChange={(e) => setSchoolID(e.target.value)} />
                        <Button
                            variant="solid"
                            sx={{
                                width: "30%",
                                background: "#255c0a",
                                borderColor: "#255c0a",
                                ":hover": {
                                    backgroundColor: "#255c0a",
                                },
                            }}
                            loading={isLoading}
                            onClick={() => userController.setSchoolID(schoolID)}
                        >
                            Change user name
                        </Button>
                        </div>
                    </div>

                </div>
            </section>
        </main>)
}

export default settings