
import React from 'react'
import {ORGANIZATION_FULL_NAME} from "@/constants/common";

export default function Hero() {
    return (
        <div className="mx-auto max-w-2xl pt-32 pb-32 sm:py-32 lg:py-48">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    className="relative bg-slate-900 rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding.{' '}
                    <a href="#" className="font-semibold text-stone-400">
                        <span aria-hidden="true" className="absolute inset-0"/>
                        Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
            <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight sm:text-87xl opacity-80 animated-text">
                {ORGANIZATION_FULL_NAME}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900 font-medium">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    </div>
    )
}
