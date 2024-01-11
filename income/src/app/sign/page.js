"use client"

import { GeldIcon } from "@/assets/Geld"
import Link from "next/link"
import { useAuth } from "../layout";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Sign() {
    const { signUp } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();
    return (
        <div className="flex  h-screen w-screen ">
            <div className="bg-white h-screen w-1/2 flex justify-center">
                <div className="flex justify-center flex-col items-center gap-[40px]">
                    <div className="flex flex-row items-center gap-2">
                        <GeldIcon />
                        <p className="text-2xl ">Geld</p>

                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">Create Geld account</h1>
                        <h3>Sign up below to create your Wallet account</h3>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <input
                            type="text"
                            placeholder="Name" onChange={(e) => setName(e.target.value)}
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"

                            />
                            <input
                            type="text"
                            placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"

                            />
                            <input
                            type="password"
                             onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"

                            />
                            <input placeholder="Re-Password "
                            type="password"
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex" />
                        </div>
                        <input 
                        type="submit" 
                         value="Sign up"
                        onClick={(e) => {
                            signUp(name ,email, password);
                           
                           
                        }} className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] text-center justify-center items-center gap-1 inline-flex cursor-pointer text-white"></input>
                    </div>
                    <div className="flex flex-row gap-5">
                        <h2>Already have account?</h2>
                        <Link href="/login">
                            <h2 className="text-blue-600 text-base font-normal  leading-normal">Log in</h2>
                        </Link>
                    </div>
                </div>


            </div>
            <div className="bg-blue-600 w-1/2  h-screen ">

            </div>
        </div>


    )
}
