import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [email, setEmail] = useState(null);

    const profileSelector = useSelector(state => state.auth.user);
    const emaildata = profileSelector?.email;

    useEffect(() => {
        if (emaildata) {
            setEmail(emaildata);
        }
    }, [emaildata]);
    return (
        <div className="d-flex justify-content-center align-items-center vw-100 ">
            {email !== null ?
                (<section className='card col-12 col-md-6'>
                    <p className='card-title h2'>Profile</p>
                    <div className='card-body dashboard'>
                        <div className='fontstyle dashboard-font p-2'>Name: {profileSelector.firstName} {profileSelector.lastName}</div>
                        <div className='fontstyle dashboard-font p-2'>Email: {email}</div>
                    </div>
                </section >)
                : (
                    <div className='fontstyle'>Loading...</div> 
                )}
        </div>
    );
}

export default Dashboard;



