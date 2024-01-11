import { BalanceIcon } from "@/assets/Balance"
import { CheckIcon } from "@/assets/Check"
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
                            <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
                            <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">3</div>
                        </div>
                        <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">Finish</div>
                    </div>
                </div>
            </div>
            <div class="self-stretch flex-col justify-start items-center gap-20 inline-flex">
                <div class="self-stretch h-[156px] flex-col justify-start items-center gap-3 flex">
                    <div class="flex-col justify-start items-center gap-4 flex">
                       <CheckIcon/>
                        <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">Good Job!</div>
                    </div>
                    <div class="self-stretch text-center text-slate-600 text-base font-normal  leading-normal">Your very first account has been created. Now continue to dashboard and start tracking</div>
                    <div class="self-stretch text-center text-slate-600 text-base font-normal  leading-normal">continue to dashboard and start tracking</div>
                </div>
                <div class="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                    <div class="text-white text-xl font-normal ] leading-7">Go to Dashboard</div>
                </div>
            </div>
        </div>
    )
}
