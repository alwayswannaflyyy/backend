"use client"

import React, { useState } from 'react';
export const RangeInput = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const handleChange = (event) => {
        setRangeValue(event.target.value);
    };
    return (
        <div className='flex flex-col gap-5'>
            <div class="self-stretch justify-start items-start gap-4 inline-flex">
                <div class="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                    <div class="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal">0</div>
                    </div>
                </div>
                <div class="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                    <div class="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal"> <p>{rangeValue}</p></div>
                    </div>
                </div>
            </div>
            <input
                className='w-56'
                type="range"
                min={0}
                max={1000}
                value={rangeValue}
                onChange={handleChange}
            />

        </div>
    );
};
