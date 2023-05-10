import React from "react";



const CustomButton = ({customstyle,onClick,value}) => {

    return(

        <>
         <button className={customstyle} onClick={()=>{onClick()}}>
            {value}
         </button>
        </>

    );
};
export default CustomButton; 