import React from 'react';
import {AiFillHome} from "react-icons/ai";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => (
    <>
        <div id="wrapper">
            <SideBar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar/>
                <div className="container" id="main-container">

                    <React.Fragment>
                        <div className="">
                            <AiFillHome/>
                            <h1 className="display-4">Home</h1>
                            <h1 className="display-4">TestPush</h1>
                        </div>
                    </React.Fragment>
                </div>
                <Footer/>
            </div>
        </div>
    </>
);

export default HomePage;