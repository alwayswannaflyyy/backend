"use client"

import { AddIcon } from "@/assets/Add"
import { BalanceIcon } from "@/assets/Balance"
import { CheckIcon } from "@/assets/Check"
import { GeldIcon } from "@/assets/Geld"
import { HomeIcon } from "@/assets/Home"
import { WaveIcon } from "@/assets/Wave"
import { WhiteGeld } from "@/assets/Whitegeld"
import { NavBar } from "@/components/Navbar"
import { RecordAdd } from "@/components/Recordadd"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { faker } from "@faker-js/faker"
import { BarSection } from "@/components/BarCode"
import { DoughNut } from "@/components/Doughnut"
import Profile from "@/components/Profile"
import BalanceComponent from "@/components/Hidden"



export default function DashBoard() {
    const [activeTab, setactiveTab] = useState(0)
    return (

        <div class="w-[1440px] h-[1148px] flex justify-center items-center m-auto relative bg-gray-100">
            <div classname="flex justify-center items-center">
                <div class="w-[1440px] px-[120px] py-4 left-0 top-0 absolute bg-white justify-between items-center inline-flex">
                    <NavBar activeTab={activeTab} setactiveTab={setactiveTab} />
                    <div class="justify-start items-center gap-6 flex">
                        <RecordAdd />
                        <div class="w-10 h-10 flex-col justify-center items-center relative inline-flex">
                        <Profile/>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div class="w-96 h-[216px] left-[120px] top-[104px] absolute bg-blue-600 rounded-[18px]">
                        <div class="origin-top-left rotate-[-40.19deg] opacity-50 w-[212.63px] h-[189px] left-[160px] top-[158.20px] absolute">
                            <div class="w-[212.63px] h-[106.31px] left-0 top-0 absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[3.81px] top-[4.51px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[7.62px] top-[9.02px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[11.43px] top-[13.54px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[15.24px] top-[18.05px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[19.06px] top-[22.56px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[22.87px] top-[27.07px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[26.68px] top-[31.59px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[30.49px] top-[36.10px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[34.30px] top-[40.61px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[38.11px] top-[45.12px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[41.92px] top-[49.63px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[45.73px] top-[54.15px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[49.55px] top-[58.66px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                            <div class="w-[212.63px] h-[106.31px] left-[53.36px] top-[63.17px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
                        </div>
                        <img class="w-[384.12px] h-[219.66px] left-0 top-0 absolute opacity-30 mix-blend-overlay rounded-tl-[18px] rounded-bl-[18px]" src="https://via.placeholder.com/" />
                        <div className="absolute left-[29px] top-4 ">
                            <WhiteGeld />
                        </div>
                        <div class="left-[32px] top-[128px] absolute flex-col justify-start items-start inline-flex">
                            <div class="opacity-50 text-center text-white text-base font-normal font-['Roboto'] leading-normal">Cash</div>
                            <div className="flex items-center justify-between">
                                <div class="text-center text-white text-2xl font-semibold font-['Roboto'] leading-loose">10,000,00</div>
                                <WaveIcon />
                            </div>
                        </div>

                    </div>
                    <div class="h-[216px] w-96 left-[528px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
                        <div class="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
                            <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                            <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Your Income</div>
                        </div>
                        <div class="self-stretch h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
                            <div class="flex-col justify-start items-start gap-1 flex">
                                <div class="justify-start items-start gap-1 inline-flex">
                                    {/* <div class="text-black text-4xl font-semibold font-['Roboto'] leading-10">1,200,000</div>
                                    <div class="text-black text-4xl font-semibold font-['Roboto'] leading-10">₮</div> */}
                                    <BalanceComponent/>
                                </div>
                                <div class="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">Your Income Amount</div>
                            </div>
                            <div class="justify-start items-center gap-2 inline-flex">
                                <AddIcon />
                                <div class="text-black text-lg font-normal font-['Roboto'] leading-7">32% from last month</div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[216px] w-96 left-[936px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
                        <div class="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
                            <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Total Expenses</div>
                        </div>
                        <div class="self-stretch h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
                            <div class="flex-col justify-start items-start gap-1 flex">
                                <div class="justify-start items-start gap-1 inline-flex">
                                    <div class="text-black text-4xl font-semibold font-['Roboto'] leading-10">-1,200,000</div>
                                    <div class="text-black text-4xl font-semibold font-['Roboto'] leading-10">₮</div>
                                </div>
                                <div class="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">Your Income Amount</div>
                            </div>
                            <div class="justify-start items-center gap-2 inline-flex">
                                <AddIcon />
                                <div class="text-black text-lg font-normal font-['Roboto'] leading-7">32% from last month</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-[456px] w-[1200px] left-[120px] top-[652px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
                    <div class="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
                        <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Last Records</div>
                    </div>
                    <div class="self-stretch h-[400px] px-6 flex-col justify-start items-start flex">
                        <div class="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">

                                <HomeIcon />
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">3 hours ago</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <HomeIcon />
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">3 hours ago</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <HomeIcon />
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">3 hours ago</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <HomeIcon />
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">3 hours ago</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                        <div class="self-stretch py-5 bg-white border-gray-200 justify-between items-center inline-flex">
                            <div class="justify-start items-center gap-4 flex">
                                <HomeIcon />
                                <div class="flex-col justify-center items-start inline-flex">
                                    <div class="text-black text-base font-normal font-['Roboto'] leading-normal">Lending & Renting</div>
                                    <div class="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">3 hours ago</div>
                                </div>
                            </div>
                            <div class="justify-start items-center gap-2 flex">
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">-</div>
                                <div class="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">1,000₮</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[588px] h-[284px] left-[120px] top-[344px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
                    <div class="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
                        <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Income - Expense</div>
                    </div>
                    {/* <div class="self-stretch h-[226px] px-6 py-8 flex-col justify-end items-start gap-8 flex">
                        <Bar options={options} data={data} />
                    </div> */}
                    <BarSection/>
                </div>
                <div class="h-[284px] left-[732px] top-[344px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
                    <div class="self-stretch px-6 py-4 border-b border-slate-200 justify-between items-center inline-flex">
                        <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Income - Expense</div>
                        <div class="text-gray-500 text-base font-normal font-['Roboto'] leading-normal">Jun 1 - Nov 30</div>
                    </div>
                    <div class="self-stretch h-[228px] px-6 py-8 flex-col justify-start items-start gap-10 flex">
                        <div class="self-stretch justify-start items-start gap-[47px] inline-flex">
                            <div class="w-[156px] h-[156px] relative">
                                {/* <div class="w-[156px] h-[156px] left-0 top-0 absolute rounded-full border-8 border-blue-600"></div>
                                <div class="w-[156px] h-[156px] left-0 top-0 absolute rounded-full border-8 border-pink-500"></div>
                                <div class="w-[156px] h-[156px] left-0 top-0 absolute rounded-full border-8 border-orange-300"></div>
                                <div class="w-[156px] h-[156px] left-0 top-0 absolute rounded-full border-8 border-cyan-500"></div>
                                <div class="w-[156px] h-[156px] left-0 top-0 absolute rounded-full border-8 border-amber-500"></div> */}
                                <DoughNut/>
                            </div>
                            <div class="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div class="self-stretch justify-start items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
                                        <div class="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">Bills</div>
                                    </div>
                                    <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
                                    <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
                                </div>
                                <div class="self-stretch justify-start items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        <div class="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">Food</div>
                                    </div>
                                    <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
                                    <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
                                </div>
                                <div class="self-stretch justify-start items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-3 h-3 bg-orange-300 rounded-full"></div>
                                        <div class="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">Shopping</div>
                                    </div>
                                    <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
                                    <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
                                </div>
                                <div class="self-stretch justify-start items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                        <div class="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">Insurance</div>
                                    </div>
                                    <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
                                    <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
                                </div>
                                <div class="self-stretch justify-start items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                                        <div class="w-[133px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">Clothing</div>
                                    </div>
                                    <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
                                    <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
