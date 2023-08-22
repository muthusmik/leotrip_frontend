import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function HomePage() {
    const navigate = useNavigate();

    const navigateToBusPage = () => {
        toast.success("Succesfully Navigated")
        navigate('/bus'); // Replace '/bus' with the actual route path
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p onClick={navigateToBusPage}>This is the main page of your application.</p>
        </div>
    );
}

export default HomePage;
