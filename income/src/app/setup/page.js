
import { GeldIcon } from "@/assets/Geld"
import { MoneyIcon } from "@/assets/Money"
import Image from "next/image"
import Link from "next/link"




export default function Setup() {
    return (
        <div class="h-screen w-screen justify-center pt-10 pb-[431px] bg-white flex-col items-center gap-[141px] inline-flex">
            <div class="self-stretch flex-col justify-center items-center gap-12 inline-flex">

                <div class="p-[6.30px] justify-start items-center gap-[11.03px] inline-flex"></div>
                <div className="flex flex-row items-center gap-2">
                    <GeldIcon />
                    <p className="text-2xl ">Geld</p>

                </div>
                <div class="justify-start items-center gap-4 inline-flex">
                    <div class="flex-col justify-start items-center gap-1 inline-flex">
                        <div class="w-6 h-6 relative">
                            <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
                            <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">1</div>
                        </div>
                        <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">Currency</div>
                    </div>
                    <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
                    <div class="flex-col justify-start items-center gap-1 inline-flex">
                        <div class="w-6 h-6 relative">
                            <div class="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
                            <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">2</div>
                        </div>
                        <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">Balance</div>
                    </div>
                    <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
                    <div class="flex-col justify-start items-center gap-1 inline-flex">
                        <div class="w-6 h-6 relative">
                            <div class="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
                            <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">3</div>
                        </div>
                        <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">Finish</div>
                    </div>
                </div>
            </div>
            <div class="self-stretch flex-col justify-start items-center gap-8 inline-flex">
                <div class="self-stretch h-[228px] flex-col justify-start items-center gap-3 flex">
                    <div class="flex-col justify-start items-center gap-6 flex">
                        <div class="flex-col justify-start items-center gap-4 flex">
                            <MoneyIcon />
                            <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">Select base currency</div>
                        </div>


                        <select id="countries" class="bg-gray-100 w-96 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {/* <option selected>Choose a country</option> */}
                            <option value="US">MNT - Mongolian Tugrik</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>




                    </div>
                    <div className="flex flex-col gap-1 w-96">
                        <div class="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">Your base currency should be the one you use most often. All</div>
                        <div class="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">transaction in other currencies will be calculated based on this one </div>
                    </div>
                </div>
                <div class="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                    <div class="text-white text-xl font-normal font-['Roboto'] leading-7">Confirm </div>
                </div>
            </div>
        </div>


    )
}