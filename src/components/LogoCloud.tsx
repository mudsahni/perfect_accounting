'use client';
import React from 'react';
import logos from '@/data/logos.json'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

type LogoProps = {
    name: string;
    path: string;
}
const Logo: React.FC<LogoProps> = ({name, path}) => {
    return (
        <div className="flex justify-center items-center transition-transform duration-5000 ease-in-out">
        <img
            alt={name}
            src={path}
            className="max-h-12 grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-transform duration-5000 ease-in-out"
        />
        </div>

    )
}

export default function LogoCloud() {
    const [visibleStartIndex, setVisibleStartIndex] = React.useState(0);
    const [logosPerPage, setLogosPerPage] = React.useState(3); // Default value
    const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (intervalId) clearInterval(intervalId); // Clear the interval to pause scrolling
    };

    const handleMouseLeave = () => {
        handleAutoScroll(); // Restart scrolling
    };

    const handleAutoScroll = () => {
        const id = setInterval(() => {
            nextLogos(); // This will now scroll left to right
        }, 3000);  // Scrolls every 3000 milliseconds (3 seconds)
        setIntervalId(id);
    };

    const updateLogosPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setLogosPerPage(1); // Extra small devices
        } else if (width < 768) {
            setLogosPerPage(2); // Small devices
        } else if (width < 1024) {
            setLogosPerPage(3); // Medium devices
        } else {
            setLogosPerPage(4); // Large devices and above
        }
    };

    React.useEffect(() => {
        updateLogosPerPage();
        handleAutoScroll();
        window.addEventListener('resize', updateLogosPerPage);

        // Cleanup function to clear the interval and remove listeners
        return () => {
            window.removeEventListener('resize', updateLogosPerPage);
            if (intervalId) clearInterval(intervalId);
        };
    }, );  // Include intervalId in the dependency array if you need to react to its changes

    // const nextLogos = () => {
    //     setVisibleStartIndex(prevIndex => Math.min(prevIndex + logosPerPage, logos.length - logosPerPage));
    // };

    const nextLogos = () => {
        setVisibleStartIndex(prevIndex => {
            // Calculate the new index when moving backward by one page
            const nextIndex = prevIndex + 1;
            // If the adjusted index is less than 0, wrap to the end of the list
            if (nextIndex > logos.length - 1) {
                // Calculate the start index of the last possible full page of logos
                return 0;
            } else {
                return nextIndex;
            }
        });
    };

    const prevLogos = () => {
        setVisibleStartIndex(prevIndex => {
            // Calculate the new index when moving backward by logosPerPage
            const prevIndexAdjusted = prevIndex - 1;
            // If the adjusted index is less than 0, wrap to the end of the list
            if (prevIndexAdjusted < 0) {
                // Calculate the start index of the last possible full page of logos
                return logos.length - 1;
            } else {
                return prevIndexAdjusted;
            }
        });
    };


    // const prevLogos = () => {
    //     setVisibleStartIndex(prevIndex => Math.max(prevIndex - logosPerPage, 0));
    // };

    const getVisibleLogos = () => {
        // Create an array to store the indices of visible logos
        const indices = [];
        for (let i = 0; i < logosPerPage; i++) {
            // Calculate index ensuring it wraps around if it goes out of bounds
            const index = (visibleStartIndex + i) % logos.length;
            indices.push(index);
        }
        // Map indices to logos
        return indices.map(index => logos[index]);
    };

    const visibleLogos = getVisibleLogos();

    return (
        <div className="z-50 bg-stone-100 p-4"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center pb-20">
                    <p className="relative rounded-full animated-background px-4 py-1.5 text-sm leading-6 text-stone-100 ring-1 ring-inset ring-gray-900/5">
                        <span
                            className="hidden md:inline">Over a 100 companies use our tools to better their business.</span>
                        <a href="#" className="font-semibold text-violet-400">
                            <span aria-hidden="true" className="absolute inset-0"/> Read our customer stories{' '}
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </p>
                </div>

                <div
                    className="transition-transform duration-10000 ease-in-out mx-auto grid max-w-lg grid-cols-[auto_1fr_1fr_auto] items-center gap-x-4 gap-y-12 sm:max-w-xl sm:grid-cols-[auto_1fr_1fr_1fr_auto] sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-[auto_1fr_1fr_1fr_1fr_auto] lg:gap-x-8">
                    <button onClick={prevLogos} className="w-10 flex justify-center items-center text-neutral-800">
                        <ChevronLeftIcon
                            className="h-8 w-8 opacity-70 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer hover:opacity-100"/>
                    </button>
                    {visibleLogos.map((logo, index) => <Logo key={logo.name + index} name={logo.name}
                                                             path={logo.path}/>)}
                    <button onClick={nextLogos} className="w-10 flex justify-center items-center text-neutral-800">
                        <ChevronRightIcon
                            className="h-8 w-8 opacity-70 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer hover:opacity-100"/>
                    </button>
                </div>

            </div>
        </div>
    )
}
