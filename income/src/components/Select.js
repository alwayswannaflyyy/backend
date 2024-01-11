

import React, { useState } from 'react';
import Select from 'react-select';
import { css } from '@emotion/react';
import { HomeIcon1 } from '@/assets/HomeIcon';
import { HomeIcon2 } from '@/assets/HomeIcon2';
import { IdBadge } from '@/assets/IdBadge';
import { IdCard } from '@/assets/IdCard';
import { Ladder } from '@/assets/Ladder';
import { InterSquare } from '@/assets/InterSquare';
import { ImageSquare } from '@/assets/ImageSquare';
import { Magnify } from '@/assets/Magnify';
import { MicroPhone } from '@/assets/Microphone';
import { ExcelIcon } from '@/assets/Excel';
import { NotePad } from '@/assets/NotePad';
import { ListPlus } from '@/assets/Listplus';
import { LeafIcon } from '@/assets/Leaf';
import { NumberFive } from '@/assets/NumberFive';
import { SevenIcon } from '@/assets/NumberSeven';
import { Road } from '@/assets/Road'
import { HourGlass } from '@/assets/HourGlass';
import { Anchor } from '@/assets/Anchor';
import { CurveIcon } from '@/assets/Curve';
import { VignetteIcon } from '@/assets/Vignette';
import { BaseBall } from '@/assets/BaseBall';
import { QuestionMark } from '@/assets/QuestionM';
import { ExamIcon } from '@/assets/Exam';
import { WatchIcon } from '@/assets/Watch';
import { GlobeIcon } from '@/assets/Globe';
import { OrangeIcon } from '@/assets/Orange';
import { PeaceIcon } from '@/assets/Peace';
import { ToiletPaper } from '@/assets/Toilet';
import { Pencil } from '@/assets/Pencil';
import IconComponent from './ColorChanger';
import { DownArrow } from '@/assets/Downarrow';
import { ExcludeIcon } from '@/assets/Exclude';


const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isColor, setColor] = useState("");
    const style = { color: isColor };

    console.log(isColor)

    const options = [
        <HomeIcon1 color={isColor} />,
        <HomeIcon2 color={isColor} />,
        <IdBadge color={isColor} />,
        <IdCard color={isColor} />,
        <Ladder color={isColor} />,
        <InterSquare color={isColor} />,
        <ImageSquare color={isColor} />,
        <Magnify color={isColor}/>,
        <MicroPhone color={isColor} />,
        <ExcelIcon color={isColor}/>,
        <NotePad color={isColor} />,
        <ListPlus color={isColor} />,
        <LeafIcon color={isColor} />,
        <NumberFive color={isColor} />,
        <SevenIcon color={isColor}/>,
        <Road color={isColor} />,
        <HourGlass color={isColor} />,
        <Anchor color={isColor} />,
        <CurveIcon color={isColor} />,
        <ExcludeIcon color={isColor} />,
        <VignetteIcon color={isColor} />,
        <BaseBall color={isColor} />,
        <QuestionMark color={isColor} />,
        <ExamIcon color={isColor} />,
        <WatchIcon color={isColor} />,
        <GlobeIcon color={isColor} />,
        <OrangeIcon color={isColor} />,
        <PeaceIcon color={isColor}/>,
        <ToiletPaper color={isColor} />,
        <Pencil color={isColor} />,


    ];
    // const firstColor = "#0166FF";
    // const secondColor = "#01B2FF";
    // const thirdColor = "#41CC00";
    // const fourthColor = "#F9D100";
    // const fifthColor = "#FF7A01";
    // const sixthColor = "#FF0101";

    const colors = [
        // "#343330",
        "#0166FF",
        "#01B2FF",
        "#41CC00",
        "#F9D100",
        "#FF7A01",
        "#FF0101",

    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className='bg-gray-100 h-[46px] relative  rounded-3xl'>
            <div className="custom-select fixed  bg-white rounded-2xl left-13 top-32">
                <div className="select-header fixed flex justify-center items-center  left-14 " onClick={toggleDropdown}>
                    {selectedOption || '❤️'}
                    < DownArrow />
                </div>
                {isOpen && (
                    <div className="options grid grid-cols-6 p-2 fixed bg-white top-40  left-12 border-2 rounded-xl  gap-[24px]">
                        {options.map((option, index) => (
                            <div key={index} onClick={() => handleOptionClick(option)}>
                                {option}
                            </div>

                        ))}

                        {colors.map((color) => (
                            <div className=' w-5 h-5 rounded-full bg-black'  key={color} onClick={() => setColor(color)} style={{ background: color }} >

                            </div>
                        ))}
                        <div class="justify-start items-start  gap-4   flex">
                        </div>

                    </div>
                )}

            </div>
        </div>
    );

};
export default CustomSelect;



