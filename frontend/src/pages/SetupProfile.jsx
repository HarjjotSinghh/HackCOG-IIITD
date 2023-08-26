import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Playground } from "../components/Navbar.tsx";
import Footer from "../components/Footer";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { backendApiUri } from "../App.js";

const handleUserAdd = async () => {
    const addUser = await axios.post(`${backendApiUri}/addUser`,
            {"userName": "test1", "email": "1@gmail.com"},
            {headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
             }
            }
            );
}

export default function SetupProfile() {
    const { userId, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();
    // let addUser = "";
    if (isSignedIn && isLoaded) {
        // console.log(user.username);
        handleUserAdd();
    }
    return (
        <>
            <SignedIn>
                <Playground></Playground>
                    <div>{isSignedIn}</div>
                <Footer></Footer>
            </SignedIn>
            <SignedOut>
                
            </SignedOut>
            
        </>
    );
}