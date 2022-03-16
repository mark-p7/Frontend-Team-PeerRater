import React, { Component } from 'react';
import {AiFillHome} from "react-icons/ai";

const HomePage = () => (
    <React.Fragment>
        <div class="">
            <AiFillHome />
            <h1 class="display-4">Home</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3975</b></h4>
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3717</b></h4>
                        <h4><b>John Doe2</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3522</b></h4>
                        <h4><b>John Doe3</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        </div>
        
    </React.Fragment>
);

export default HomePage;