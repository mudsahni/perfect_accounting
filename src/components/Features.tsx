import {services} from '@/data/services/services'
import Link from "next/link";

export default function Features() {
    return (
        <div className="bg-stone-100 py-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold leading-7 text-stone-600">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-stone-700 sm:text-4xl">We can solve it for you</p>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                        We provide a bouquet of expert services in a diverse domain to distinctive industries. Explore the complete list of services we are equipped with and industries we cater to.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-2 text-base leading-7 text-gray-900 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                    {services.map((feature) => (
                        <Link key ={feature.name} href={`services/${feature.name.toLowerCase().split(' ').join('-')}`}>
                            <div key={feature.name} className="relative pl-9 hover:bg-stone-200 transition duration-100 ease-in-out cursor-pointer rounded-xl py-6 px-4">
                                <dt className="inline font-semibold text-stone-800">
                                    <feature.icon aria-hidden="true" className="absolute left-2 top-7 h-5 w-5 text-indigo-500" />
                                    {feature.name}{':'}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                        </Link>
                    ))}
                </dl>
            </div>
        </div>
    )
}
