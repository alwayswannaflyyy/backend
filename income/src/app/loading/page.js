import { GeldIcon } from "@/assets/Geld"
import Link from "next/link"



export default function LoadingPage() {
    return (
        <div class="h-screen w-screen  bg-white justify-center items-center inline-flex">
            <div class="self-stretch flex-col justify-center items-center gap-12 inline-flex">
                <div class="p-[10.08px] justify-start items-center gap-[17.64px] inline-flex"></div>
                <div class="flex-col justify-start items-center gap-10 flex">
                    <div className="flex flex-row gap-3 items-center">
                        <GeldIcon  className="p-100"/>
                        <h1 className="text-4xl">Geld</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">

                        <span className="loading loading-spinner text-primary"></span>
                        <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Түр хүлээнэ үү...</div>
                    </div>
                </div>
            </div>
        </div>


    )
}
