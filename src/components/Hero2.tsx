'use client'

import {ORGANIZATION_FULL_NAME} from "@/constants/common";
import React from "react";

export default function Hero2() {

    return (
        <div className="hero-background-animation">
            <div className="absolute top-0 left-0 w-full h-full hero-background-overlay"></div> {/* Overlay div for the image */}
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center sm:mb-32">
                    <div className="relative w-full mb-12 sm:mb-24 xs:mb-0 max-w-xl pr-4 lg:shrink-0 xl:max-w-2xl flex flex-wrap rounded-xl p-8 translucent-white-background">
                        <h1 className="text-6xl font-bold tracking-tight opacity-80 animated-text sm:text-8xl">
                            {ORGANIZATION_FULL_NAME}.
                        </h1>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md border-2 border-stone-800 hover:bg-stone-300 opacity-90 px-3.5 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Start Growing
                            </a>

                            <a
                                href="#"
                                className="rounded-md animated-background opacity-90 px-3.5 py-2.5 text-sm font-semibold text-stone-100 shadow-sm hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get In Touch
                            </a>
                            {/*<div className="button">*/}
                            {/*    <span className="text">Button</span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div
                        className="relative w-full mb-12 sm:mb-24 max-w-xl lg:shrink-0 xl:max-w-2xl flex flex-wrap items-center justify-center"
                    >

                        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl animated-text-white">
                            Your Growth Is Our Business.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-stone-100 font-medium">
                            Partner with experts who care about your success as much as you do. Let's build your future
                            together with precision and expertise in every calculation.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}
