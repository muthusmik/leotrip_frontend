import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button
            onClick={handleToggle}
            className={`w-[2.25rem] h-5 rounded-full relative transition-colors border-2 ${isToggled ? 'bg-green-500' : 'bg-gray-300'
                }`}
        >
            <div
                className={`w-4 h-4 rounded-full absolute top-0 transform ${isToggled ? 'translate-x-full' : 'translate-x-0'
                    } transition-transform bg-white`}
            ></div>
        </button>
    );
};

export default ToggleButton;
