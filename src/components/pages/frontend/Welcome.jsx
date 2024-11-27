import { imgPath } from '@/components/helpers/functions-general';
import { CheckCircle, CircleCheck, PointerIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <main className="w-full h-screen relative">
            <h1 className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-white">Order and Pay Here</h1>
            <img src={`${imgPath}/welcomebanner.jpg`} 
                alt="" 
                className="h-full block object-cover w-full" />

            <div className="absolute w-full bottom-0 left-0">
                <div className="bg-myred text-white text-center p-4 font-bold">
                    <Link to="/order" className="text-4xl flex justify-center items-center gap-5"><PointerIcon size={30} className="rotate-[-30deg]"/>Tap Here to Start
                    </Link>
                </div>

                <div className="bg-white p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <CircleCheck size={40} fill="red" stroke="white"/>
                        <h4 className="mb-0 leading-[1.1]">
                            Pay with Cash <br /> or Card
                        </h4>
                    </div>
                    <div className=" pl-4 border-l-4 border-myred basis-[300px]">
                        <h5 className=" text-myred mb-1">For other paymnets</h5>
                        <p className="text-xs text-black opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste beatae sunt porro corporis iusto cupiditate culpa ex exercitationem illum.</p>
                    </div>
                </div>
            </div>    
            </main>
        </>
  );
};

export default Welcome