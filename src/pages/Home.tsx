import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalFullHeight from '../styles/ModalFullHeight';
import BusModule from '../modules/bus';
import { PrimaryButton } from 'styles/Button';

function HomePage() {
    const navigate = useNavigate();
    const [isopenModal, setIsOpenModal] = useState<boolean>(false)

    const navigateToBusPage = () => {
        toast.success("Succesfully Navigated")
        navigate('/bus'); // Replace '/bus' with the actual route path
    };

    return (
        <div className='border-5 w-full'>
            <h1 onClick={() => setIsOpenModal(true)}>Welcome to the Home Page</h1>
            <p onClick={navigateToBusPage}>This is the main page of your application.</p>
            <PrimaryButton rounded>Search</PrimaryButton>
            <ModalFullHeight
                active={isopenModal}
                closeModal={() => setIsOpenModal(false)}
                width="w-[820px]"
            >
                <BusModule />
            </ModalFullHeight>
        </div>
    );
}

export default HomePage;
