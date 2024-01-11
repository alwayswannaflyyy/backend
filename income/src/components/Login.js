"use client"

import { useAuth } from "@/app/layout"
import { GeldIcon } from "@/assets/Geld"
import Link from "next/link"
import { useState } from "react"
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation"


export const LoginPage = () => {
    const { signIn, isLoggedIn } = useAuth()
    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return <div className="flex  h-screen w-screen ">
        <div className="bg-white h-screen w-1/2 flex justify-center">
            <div className="flex justify-center flex-col items-center gap-[40px]">
                <div className="flex flex-row items-center gap-2">
                    <Link href="/balance">  <GeldIcon /></Link>

                    <p className="text-2xl ">Geld</p>

                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl">Welcome Back</h1>
                    <h3>Welcome back, Please enter your details</h3>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                    <input placeholder="Email"
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}

                            />
                        <div className="relative">
                            <input placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex" />
                            <div
                                onClick={togglePasswordVisibility}
                                className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
                            >
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                            </div>
                        </div>
                    </div>
                    <input className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center text-center items-center gap-1 inline-flex text-white"
                        value="Log in"
                        onClick={async (event) => {
                            event.preventDefault();
                            await signIn(username, password);
                            if (isLoggedIn) {
                                router.push("/dashboard");
                            } else {
                                router.push("/");
                            }
                        }}
                    ></input>
                </div>
                <div className="flex flex-row gap-5">
                    <h2>Don't have account?</h2>
                    <Link href="/sign">
                        <h2 className="text-blue-600 text-base font-normal  leading-normal">Sign up</h2>
                    </Link>
                </div>
            </div>


        </div>
        <div className="bg-blue-600 w-1/2  h-screen ">

        </div>
    </div>
}