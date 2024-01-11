"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/common";
import { toast } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const signUp = async (name, email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign", {
        name,
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      // toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };


  const signIn = async (email, password) => {
    setIsLoggedIn(false)
    try {
      const res = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      const { token } = data;

      localStorage.setItem("token", token);


      setIsLoggedIn(true);

      router.push("/dashboard");
      // if (setIsLoggedIn(true)) {
      //   router.push("/dashboard");
      // } else {
      //   router.push("/");
      // }

      console.log(token);
    } catch (err) {
      console.log(err, "FFF");
    }

  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false)
    router.push("/")
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{
          signIn,
          isLoggedIn,
          setIsLoggedIn,
          signOut,
          signUp,
          isLoading,
        }}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};