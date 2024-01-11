"use client"

import { DownArrow } from "@/assets/Downarrow";
import { useState } from "react";
import { AddCat } from "./Addcategory";
import CustomSelect from "./Select";
import { FaTaxi } from "react-icons/fa6";
import { HomeIcon } from "@/assets/Home";
import { BsGiftFill } from "react-icons/bs";
import { ForkIcon } from "@/assets/Fork";
import { DrinkIcon } from "@/assets/Drink";
import { ShoppingIcon } from "@/assets/shopping";
import { BlueIcon } from "@/assets/Blue";
import { Gift2icon } from "@/assets/Gift2";
import { Taxi2Icon } from "@/assets/Taxi2";
import { PlusIcon } from "@/assets/Circle";


export const RecordAdd = () => {
    const icons = [
        <BlueIcon />, ,
        <Gift2icon />,
        <ForkIcon />,
        <DrinkIcon />,
        <Taxi2Icon />,
        <ShoppingIcon />,


    ]
    const words = [
        "Home",
        "Gift",
        "Food",
        "Drink",
        "Taxi",
        "Shopping",
    ]
 
    const [selects] = useState([
        {
          id: 2,
          title: "Home",
          image: <BlueIcon/>,
        },
        {
          id: 3,
          title: "Gift",
          image:   <Gift2icon />,
        },
        {
          id: 4,
          title: "Food",
          image: <ForkIcon />,
        },
        {
          id: 5,
          title: "Drink",
          image:   <DrinkIcon />,
        },
        {
          id: 6,
          title: "Taxi",
          image:<Taxi2Icon />,
        },
        {
          id: 7,
          title: "Shopping",
          image:     <ShoppingIcon />,
        },
      ]);



    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [color, setColor] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return <div>
        <div className="btn bg-blue-600 rounded-[20px] " onClick={() => document.getElementById('my_modal_3').showModal()}>
            <div className="text-white text-2xl">+</div>
            <div class="text-white text-base font-normal font-['Roboto'] leading-normal">Record</div>
        </div>
        <dialog id="my_modal_3" className="modal " >
            <div className="modal-box  max-w-3xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">✕</button>
                </form>
                <div class="self-stretch px-6 py-1 bor bg-white border-b border-slate-200 justify-between items-center inline-flex ">
                    <div class="text-slate-900 text-xl font-semibold font-['Roboto'] leading-7">Add Record</div>
                    {/* <div className="flex cursor-pointer">
                    <ExitIcon onClick={() => {
                        props.onClose(false)
                    }} />
                </div> */}
                </div>
                <div class="self-stretch justify-start items-start inline-flex   ">
                    <div class="grow shrink basis-0 px-6 pt-5 pb-6 bg-white flex-col  justify-start items-start gap-5 inline-flex">
                        <div className=" self-stretch bg-gray-100 rounded-[100px] justify-start items-start gap-1 inline-flex" >
                            <div
                                onClick={() => {
                                    setColor(true);
                                }}
                                className={`w-[50%] h-full flex items-center justify-center rounded-full cursor-pointer ${color
                                    ? "text-[#ffffff]  bg-[#0166FF]"
                                    : "text-[#000000] bg-[#F3F4F6]"
                                    }`}
                            >
                                Expense
                            </div>
                            <div
                                onClick={() => {
                                    setColor(false);
                                }}
                                className={`w-[50%] h-full flex items-center justify-center rounded-full cursor-pointer  ${color
                                    ? "text-[#000000] bg-[#F3F4F6]"
                                    : "text-[#ffffff]  bg-[#16A34A]"
                                    }`}
                            >
                                Income
                            </div>
                        </div>
                        <div class="self-stretch h-[340px] flex-col justify-start items-start gap-8 flex">
                            <div class="self-stretch h-[268px] flex-col justify-start items-start gap-12 flex">
                                <input placeholder="₮ 000.00" class="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex">


                                </input>
                                <div class="self-stretch h-12 rounded-lg flex-col justify-center items-start gap-1  flex">
                                    <div class="h-[18px] justify-start items-center inline-flex">
                                        <div  class="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">`${color} ? Category : `</div>
                                    </div>
                                    <div onClick={toggleDropdown} class="self-stretch h-[76px] px-4 py-6 bg-gray-100 relative rounded-lg border border-gray-300 flex-col justify-center items-start flex">
                                        <div className="flex flex-row justify-end fixed">
                                            {selectedOption || 'Choose'}
                                            <DownArrow />
                                        </div>
                                        {isOpen && (
                                            <div className="flex flex-col">
                                                <div className="options flex flex-col p-2 fixed bg-white w-[296px] h-[392px] bottom-96 top-72 left-12 border-2 rounded-xl  ">

                                                    {/* {icons.map((icons, index) => (
                                                        <div key={index} onClick={() => handleOptionClick(option)}>
                                                            {icons}
                                                        </div>

                                                    ))}
                                                    {words.map((words, index) => (
                                                        <div key={index} >
                                                            {words}
                                                        </div>
                                                    ))} */}
                                                    <div className="flex items-start border-b-2">
                                                       
                                                        <AddCat/> 
                                                    </div>
                                                    {selects.map((item) => {
                                                        return (
                                                            <div
                                                                className="flex p-[16px] items-start gap-[12px]  bg-white  "
                                                                onClick={() => {
                                                                    handleOptionClick(item.title);
                                                                }}
                                                            >
                                                                <div> {item.image}</div>
                                                                <p className="text-[16px] font-narmal">{item.title}</p>
                                                            </div>
                                                        );
                                                    })}
                                                    <div class="justify-start items-start  gap-4   flex">

                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div class="self-stretch justify-start items-start gap-3 inline-flex">
                                    <div class="grow shrink basis-0 rounded-lg flex-col justify-center items-start gap-1  inline-flex">
                                        <div class="h-[18px] justify-start items-center inline-flex">
                                            <div class="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">Date</div>
                                        </div>
                                        <input type="date" class="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">


                                        </input>
                                    </div>
                                    <div class="grow shrink basis-0 rounded-lg flex-col justify-center items-start gap-1  inline-flex">
                                        <div class="h-[18px] justify-start items-center inline-flex">
                                            <div class="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">Date</div>
                                        </div>
                                        <input type="time" class="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">

                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div class="self-stretch h-10 px-3 rounded-[20px] justify-center items-center gap-1 inline-flex">
                                <div className={`w-[100%] h-full flex items-center justify-center rounded-full cursor-pointer  ${color
                                    ? "text-[#ffffff] bg-[#0166FF]"
                                    : "text-[#ffffff]  bg-[#16A34A]"
                                    }`}
                                >Add Record</div>
                            </div>
                        </div>
                    </div>
                    <div class="grow shrink basis-0 px-6 pt-11 pb-6 bg-white flex-col justify-start items-start gap-5 inline-flex">
                        <div class="self-stretch h-[376px] flex-col justify-start items-start gap-12 flex">
                            <div class="self-stretch h-12 rounded-lg flex-col justify-center items-start gap-1 flex">
                                <div class="h-[18px] justify-start items-center inline-flex">
                                    <div class="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">Payee</div>
                                </div>
                                <input placeholder="Write here" type="text" class="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">

                                </input>
                            </div>
                            <div class="self-stretch h-[280px] rounded-lg flex-col justify-center items-start gap-1  flex">
                                <div class="h-[18px] justify-start items-center inline-flex">
                                    <div class="text-gray-800 text-xl font-normal font-['Roboto'] leading-normal">Note</div>
                                </div>
                                <textarea placeholder="Write here" class="self-stretch grow shrink basis-0 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start w-80 items-start inline-flex">

                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
}