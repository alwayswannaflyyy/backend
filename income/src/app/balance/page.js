import { BalanceIcon } from "@/assets/Balance"
import { GeldIcon } from "@/assets/Geld"
import Image from "next/image"
import Link from "next/link"




export default function SetBalance() {
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
                            <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
                            <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">2</div>
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
            <div class="self-stretch flex-col justify-center flex items-center gap-8 ">
                <div class="self-stretch h-[196px] flex-col justify-start items-center gap-3 flex">
                    <div class="flex-col justify-start items-center  gap-6 flex">
                        <div class="flex-col justify-start items-center gap-4 flex">
                            {/* <div class="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                                <div class="w-8 h-8 relative"></div>
                            </div> */}
                           <BalanceIcon/>
                            <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">Set up your cash Balance</div>
                        </div>
                        <div class="h-12 rounded-lg flex-col justify-center items-center gap-2  flex">
                            {/* <div class="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                                <input placeholder="Email" class="grow shrink basis-0 text-neutral-400 text-base font-normal bg-gray-100 font-['Roboto'] leading-normal"></input>
                            </div> */}
                            <input placeholder="Email"
                            className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"

                        />
                            <div className="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">How much cash do you have in your wallet?</div>
                        </div>
                      
                    </div>
                   
                </div>
                <div class="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                    <div class="text-white text-xl font-normal font-['Roboto'] leading-7">Confirm </div>
                </div>
            </div>
        </div>

    )
}
