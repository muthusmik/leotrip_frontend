import React, { ReactNode } from 'react';
import { ToastContainer, ToastContainerProps, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

interface CustomToastContainerProps extends ToastContainerProps {
    children: ReactNode;
}

const ToastWrapper: React.FC<CustomToastContainerProps> = ({ children, ...rest }) => {


    return (
        <>
            {children}
            <ToastContainer className="custom-toast" bodyClassName="custom-body-toast" position="top-center" hideProgressBar={true} autoClose={1000} />
        </>
    );
};

export default ToastWrapper;
