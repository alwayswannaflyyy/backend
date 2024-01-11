"use client"

import { HomeIcon1 } from '@/assets/HomeIcon';
import { HomeIcon2 } from '@/assets/HomeIcon2';
import { IdBadge } from '@/assets/IdBadge';
import { IdCard } from '@/assets/IdCard';
import { Ladder } from '@/assets/Ladder';
import { InterSquare } from '@/assets/InterSquare';

import React, { useState } from 'react';
const IconComponent = () => {
    const [iconColor, setIconColor] = useState('#FF0000'); // Initial color
    const handleColorChange = () => {
        // Change the color here to your desired color
        setIconColor('#00FF00'); // Change color to green on click
        // You can set any color value here
    };
    return (
        <div>
            <button onClick={handleColorChange}>Change Icon Color</button>
            <div className="icon-container">
                {[...Array(36)].map((_, index) => (
                    <div
                        key={index}
                        style={{ display: 'inline-block', margin: '5px' }}
                    >
                
                        <HomeIcon1 fill={iconColor} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default IconComponent;