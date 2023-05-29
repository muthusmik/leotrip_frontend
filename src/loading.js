import React from "react";
import Card from 'react-bootstrap/Card';
import './pages/preloader.scss';

const Loading = () => {

    return (
        <Card className='w-100  cardheight'>
                    <div className='my-auto'>
                        <div class="preloader-orbit-loading">
                            <div class="cssload-inner cssload-one"></div>
                            <div class="cssload-inner cssload-two"></div>
                            <div class="cssload-inner cssload-three"></div>
                        </div>
                        <h6 className='text-center mt-3'>please wait</h6>
                    </div>
                </Card>
    )
}
export default Loading;