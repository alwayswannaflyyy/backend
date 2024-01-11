"use client"

import { GeldIcon } from "@/assets/Geld"
import Link from "next/link"
import { useState } from "react"




export const NavBar = (props) => {
    return <div class="justify-start items-center gap-6 flex">
        <GeldIcon />
        <Link href="dashboard">
            <div style={{
                fontWeight: 0 === props.activeTab ? "600" : "400"
            }} class="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal">Dashboard</div>
        </Link>
        <Link href="/records">
            <div style={{
                fontWeight: 0 === props.activeTab ? "400" : "600"
            }}  class="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal">Records</div>
        </Link>
    </div>
}