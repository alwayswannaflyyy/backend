
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import React, { useState } from 'react';
const BalanceComponent = () => {
    const [showBalance, setShowBalance] = useState(true); 
    const handleToggle = () => {
        setShowBalance(!showBalance); 
    };
    return (
        <div>
            <button onClick={handleToggle}>
                {showBalance ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
            {showBalance ? (
                <p >1200000000$</p> 
            ) : (
                <p>**********</p>
            )}
        </div>
    );
};
export default BalanceComponent;