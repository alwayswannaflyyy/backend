

"use client";


import { AddIcon } from "@/assets/Add"
import { BalanceIcon } from "@/assets/Balance"
import { CheckIcon } from "@/assets/Check"
import { DotIcon } from "@/assets/Dott"
import { EyeIcon } from "@/assets/Eye"
import { GeldIcon } from "@/assets/Geld"
import { HomeIcon } from "@/assets/Home"
import { MinusIcon } from "@/assets/Minus"
import { WaveIcon } from "@/assets/Wave"
import { WhiteGeld } from "@/assets/Whitegeld"
import { RangeInput } from "@/components/Range"
import Image from "next/image"
import Link from "next/link"
import { DashRecord } from "@/components/Ww";
import React, { useState } from 'react'
import { AddRecord } from "@/components/Addrecord";
import { RecordAdd } from "@/components/Recordadd";
import { AddCat } from "@/components/Addcategory";
import { FoodIcon } from "@/assets/Food";
import { LendingIcon } from "@/assets/Lending";
import { NavBar } from "@/components/Navbar";
import Profile from "@/components/Profile";





export default function Records(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleClick = () => {
        setIsDrawerOpen(true);
    };


    return (
        <div class="w-[1440px] h-[1208px] relative m-auto bg-gray-100">
            <div class="w-[1440px] px-[120px] py-4 left-0 top-0 absolute bg-white justify-between items-center inline-flex">
               <NavBar/>
                {/* <DashRecord/> */}
                <div class="justify-start items-center gap-6 flex">
                    {/* <div class="w-[99px] px-3 bg-blue-600 rounded-[20px] justify-center text-center items-center gap-1 flex">
                        <div className="text-white text-2xl">+</div>
                        <div class="text-white text-base font-normal font-['Roboto'] leading-normal">Record</div>
                    </div> */}
                    <RecordAdd open={isDrawerOpen} onClose={setIsDrawerOpen} hi={props.toggle} />
                    <div class="w-10 h-10 flex-col justify-center items-center inline-flex">
                        {/* <img class="self-stretch grow shrink basis-0 rounded-full" src="https://via.placeholder.com/40x40" /> */}
                        {/* <img src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png" className="rounded-full"   ></img> */}
                        <Profile/>
                    </div>
                </div>
            </div>
            <div class="h-12 left-[1140px] top-[112px] absolute rounded-lg flex-col justify-center items-center inline-flex">
                <div class="self-stretch h-12 p-4 w-44 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                    <div class="grow shrink basis-0 text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">Newest fisrt</div>
                    <DotIcon />
                </div>
            </div>
            <div class="px-4 py-6 left-[120px] top-[96px] absolute bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
                <div class="self-stretch h-[88px] flex-col justify-start items-start gap-6 flex">
                    <div class="text-black text-2xl font-semibold font-['Roboto'] leading-loose">Records</div>
                    {/* <div class="self-stretch h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex cursor-pointer"  onClick={handleClick}>
                        <div class="w-5 h-5 relative text-white text-center flex justify-center items-center text-2xl">+</div>
                        <div class="text-white text-base font-normal font-['Roboto'] leading-normal">Add</div>

                    </div> */}

                    <AddRecord open={isDrawerOpen} onClose={setIsDrawerOpen} hi={props.toggle} />
                </div>
                <div class="h-8 rounded-lg flex-col justify-center items-center mt-4 flex">
                    <input placeholder="Search" class="grow rounded-lg border-2 p-2 first-letter: shrink basis-0 w-60 bg-gray-100 text-neutral-400 text-base font-normal font-['Roboto'] leading-normal"></input>
                </div>
                <div class="flex-col justify-start items-start gap-4 flex">
                    <div class="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">Types</div>
                    <div class="flex flex-col items-start">
                        <div class="h-8 px-3 rounded-lg justify-center items-center gap-2 inline-flex">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox rounded-full w-4 h-4" />
                                </label>
                            </div>
                            <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">All</div>
                        </div>
                        <div class="h-8 px-3  rounded-lg justify-center items-center gap-2 inline-flex">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox rounded-full w-4 h-4" />
                                </label>
                            </div>
                            <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Income</div>
                        </div>
                        <div class=" h-8 px-3 rounded-lg justify-center items-center gap-2 inline-flex">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox rounded-full w-4 h-4" />
                                </label>
                            </div>
                            <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Expense</div>
                        </div>
                    </div>
                </div>
                <div class=" flex-col  justify-start items-start gap-4 flex">
                    <div class="self-stretch justify-between items-center inline-flex">
                        <div class="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">Category</div>
                        <div class="w-[61px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
                            <div class="opacity-20 text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                        </div>
                    </div>
                    <div class="self-stretch h-[472px] flex-col justify-start items-start gap-2 flex">
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Shopping</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Housing</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Transportation</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Vehicle</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Life & Entertainment</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Communication, PC</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Financial expenses</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Investments</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class="px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Income</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <div class=" px-3 rounded-lg justify-center items-center gap-2 flex">
                                <EyeIcon />
                                <div class="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">Others</div>
                            </div>
                            <DotIcon />
                        </div>
                        <div class="self-stretch justify-between items-center inline-flex">
                            <AddCat />

                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-4 flex">
                    <div class="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">Amount Range</div>
                    <div class="flex-col justify-start items-center gap-4 flex">
                        <RangeInput />
                    </div>
                </div>
            </div>
            <div class="left-[426px] top-[120px] absolute justify-start items-center gap-4 inline-flex">
                <div class="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                    <div class="w-5 h-5 relative text-center flex justify-center items-center">&#60;</div>
                </div>
                <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Last 30 Days</div>
                <div class="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                    <div class="w-5 h-5 relative text-center flex justify-center items-center">&#62;</div>
                </div>
            </div>
            <div class="h-[980px] left-[426px] top-[176px] absolute flex-col justify-start items-start gap-6 inline-flex">
                <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                    <div class="justify-start items-center gap-4 flex">
                    <input type="checkbox"  className="checkbox" />
                        <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Select all</div>
                    </div>
                    <div class="justify-start items-center gap-2 flex">
                        <div class="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                        <div class="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">35,500₮</div>
                    </div>
                </div>
                <div class="self-stretch h-[404px] flex-col justify-start items-start gap-3 flex">
                    <div class="text-black text-base font-semibold font-['Roboto'] leading-normal">Today</div>
                    <div class="self-stretch h-[368px]  flex-col justify-start items-start gap-3 flex">
                        <div class="self-stretch px-6 w-[890px] py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    {/* <LendingIcon /> */}
                                    <HomeIcon/>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    {/* <div class="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full"></div>
                                    <div class="w-5 h-5 left-[10px] top-[10px] absolute rounded"></div> */}
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-red-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-red-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="self-stretch h-[480px] flex-col justify-start items-start gap-3 flex">
                    <div class="text-black text-base font-semibold font-['Roboto'] leading-normal">Yesterday</div>
                    <div class="self-stretch h-[444px] flex-col justify-start items-start gap-3 flex">
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <input type="checkbox" className="checkbox" />
                                <div class="w-10 h-10 relative">
                                    <FoodIcon />
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Food & Drinks</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">14:00</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center relative bottom-52 top-44 ">
                {/* <AddRecord open={isDrawerOpen} onClose={setIsDrawerOpen} hi={props.toggle} /> */}
            </div>
        </div>

    )
}
