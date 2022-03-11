import React from 'react';
const profileStyle = {
    main:{
        textAlign: 'center',
        borderRadius: '25px',
        overflow: 'hidden',
        boxShadow: '1px 1px',
        height: '100px',
        padding: '20px'

       },

    images:{
        borderRadius: '50%',
        width: '100px',
        padding: '1px',
        border: '1px solid #ddd'
    },
    profile:{
        padding: '10px',
        textAlign: 'center'
    },
    card:{
        paddingTop: '20px'
    }

}


const ProfilePage = () => (
    <React.Fragment>
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div style={profileStyle.profile}>
                               
                                <img style={profileStyle.images} src={require('../img/blank-profile-picture.png')} />
                                 
                                <h6>John Doe</h6>
                            </div>
                        </div>
                        <div style={profileStyle.card} class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">jdoe@gmail.com</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Age</p>
                                        <h6 class="text-muted f-w-400">24</h6>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </React.Fragment>
);

export default ProfilePage;