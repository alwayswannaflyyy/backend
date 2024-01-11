"use client";

import { useEffect, useState } from "react";
import Link from 'next/link'

const tabs = ["Dashboard", "Records"]
export const DashRecord = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return <div className="justify-start items-center gap-6 flex">
        {tabs.map((item) => (
            <div
                onClick={() => {
                    setActiveTab(item);
                }}
                key={item}
                style={{
                    color: item === activeTab ? "gray" : "black",
                }}
            >
                {item}
            </div>

        ))}
    </div>
}
