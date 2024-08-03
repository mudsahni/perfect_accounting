'use client';

import statistics from '../data/statistics.json';
import intro from '../data/statistics-intro.json';

import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

type StatisticProps = {
    statistic: string;
    title: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    size: string;
}
const Statistic: React.FC<StatisticProps> = ({
                                                 statistic,
                                                 title,
                                                 description,
                                                 backgroundColor,
                                                 textColor,
                                                 size
}) => {

    const commonClasses = "flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 transition-transform duration-1000 ease-in-out transform hover:scale-105"
    const sizeClasses: {[key: string]: string} = {
        "small": `${commonClasses} sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start`,
        "medium": `${commonClasses} sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44`,
        "large": `${commonClasses} sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28`,
    }

    return (
        <div className={sizeClasses[size] + " background-fill " + backgroundColor}>
            <p className={`flex-none text-3xl font-bold tracking-tight ${textColor}-900 fade-in-text`}>{statistic}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className={`text-lg font-semibold tracking-tight ${textColor}-900 fade-in-text`}>
                    {title}
                </p>
                <p className={`mt-2 text-base leading-7 ${textColor}-500 fade-in-text`}>
                    {description}
                </p>
            </div>
        </div>
    )
}


function Statistics2() {
    return (
        <div className="bg-stone-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We approach the workplace as something that adds to our lives and adds value to world.
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat
                        nam arcu. Cras
                        purus nibh cursus sit eu in id. Integer vel nibh.
                    </p>
                </div>
                <div
                    className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">

                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                                Vel labore deleniti veniam consequuntur sunt nobis.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">
                                We’re proud that our customers have made over $8 billion in total revenue.
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-400">
                                Eu duis porta aliquam ornare. Elementum eget magna egestas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Statistics() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visible to true
                    observer.unobserve(entry.target); // Stop observing the element
                }
            },
            {
                threshold: 0.5 // Adjust the threshold to when you want the animation to trigger
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect(); // Clean up the observer when the component unmounts
            }
        };
    }, [ref]);

    return (
        <div className="py-24 sm:py-24 yellow-background">
            <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
                <div className="flex">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-stone-700 sm:text-4xl">
                        {intro.title}
                    </h2>
                    <p className="mt-6 text-base font-medium leading-7 text-stone-700">
                        {intro.description}
                    </p>
                </div>
                    {/*<div>*/}
                    {/*    <motion.div*/}
                    {/*        className="container bg-black h-100 w-100 p-12 rounded-lg"*/}
                    {/*        whileHover={{scale: 1.2, rotate: 90}}*/}
                    {/*        whileTap={{scale: 0.8, rotate: -90, borderRadius: "100%"}}*/}
                    {/*    >*/}
                    {/*    </motion.div>*/}

                    {/*</div>*/}
                </div>
                <div
                    className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    {
                        statistics.map(statistic => (
                            <Statistic
                                key={statistic.statistic}
                                {...statistic}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
