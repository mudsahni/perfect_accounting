'use client';
import React, { useState, useEffect } from 'react';
import {animate, AnimationPlaybackControls, motion, useMotionValue} from 'framer-motion';
import logos from '@/data/logos.json'
import useMeasure from "react-use-measure";

interface ImageData {
    src: string;
    alt: string;
}

type CardProps = {
    src: string;
    alt: string;
}

const Card: React.FC<CardProps> = ({src, alt}) => {


    return (
        <motion.div
            className="relative overflow-hidden min-w-[200px] min-h-[200px] flex justify-center items-center max-w-screen grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500 ease-in-out"
        >
                <img src={src} alt={alt} title={alt} className="max-h-12"/>
        </motion.div>
    )
}


const Carousel: React.FC = () => {
    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = React.useState(FAST_DURATION);
    let [ref, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls: AnimationPlaybackControls;
        let finalPosition = -width/2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            })
        }

        return () => controls?.stop();
    }, [xTranslation, width, duration, rerender]);

    return (
        <div className="pb-8 mb-12 overflow-hidden max-w-[100vw]">
            <motion.div
                className=" flex gap-20 flex justify-center items-center"
                ref={ref}
                style={{x: xTranslation}}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {
                    [...logos, ...logos].map((item: { name: string; path: string }, index: number) => (
                            <Card key={index} src={item.path} alt={item.name}/>
                        )
                    )
                }
            </motion.div>
            <div className="flex justify-center py-12">
                <p className="hover:bg-white transition-transform duration-500 ease-in-out relative rounded-full bg-transparent border-2 border-stone-800 px-4 py-1.5 text-sm leading-6 text-stone-800 ring-1 ring-inset ring-gray-900/5">
                        <span
                            className="hidden md:inline">We've helped over a 100 companies grow their businesses.</span>
                    <a href="#" className="font-semibold text-stone-950">
                        <span aria-hidden="true" className="absolute inset-0"/> Read our customer stories{' '}
                        <span className="arrow">→</span>
                    </a>
                </p>
            </div>

        </div>
    )
};

export default Carousel;
