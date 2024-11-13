"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import plant2 from "public/plant2.jpg"
import plant3 from "public/plant3.jpg"
import plant4 from "public/plant4.jpg"

const Bedroom1 = () => {
    const router = useRouter()
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex flex-col bg-gray-300    font-test text-black'>

            <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                <h1 className='text-5xl my-3'>WATERING WIZARD
                </h1>
                <button onClick={() => router.push("/user_page")} className='text-xl font-sans'>Home</button>
            </div>

            <div className='flex justify-center mt-20'>
                <h1 className='text-4xl font-bold font-sans font-light  '>Bedroom 1</h1>
            </div>


            <div className='flex flex-grow mt-10 h-screen items-center justify-center'>
                <div className="border-2 rounded-lg p-2">
                    <Image src={plant3} alt="Living Room" className="mx-2 w-40% h-auto" onClick={() => router.push("/plant3")} /> {/**TODO: change the plants images */}
                </div>
                <div className="border-2 rounded-lg p-2">
                    <Image src={plant4} alt="Living Room" className="mx-2 w-40% h-auto" onClick={() => router.push("/plant4")} />
                </div>

                <div className="border-2 rounded-lg p-2">
                    <Image src={plant2} alt="Living Room" className="mx-2 w-40% h-auto" onClick={() => router.push("/plant2")} />
                </div>
            </div>

        </div>

    );
};

export default Bedroom1;