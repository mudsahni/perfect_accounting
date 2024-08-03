'use client';
import testimonials from '../data/testimonials.json'
import React, { useEffect, useRef, useState } from "react";

type TestimonialCardProps = {
    testimonial: {
        body: string;
        author: {
            name: string;
            title: string;
            image: string;
        }
    };
    index: number;
    isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isVisible }) => {
    const truncateText = (text: string, length: number) => {
        if (text.length <= length) {
            return text;
        }
        return text.slice(0, length) + '.... ';
    };

    const [isExpanded, setIsExpanded] = React.useState(false);
    const maxLength = 250; // Max length of text before truncation
    const animationDelay = `${index * 0.1}s`; // Calculate delay based on index

    return (
        <div key={testimonial.author.title} className={`pt-8 sm:inline-block sm:w-full sm:px-4 ${isVisible ? 'popIn' : ''}`}
             style={{ animationDelay: isVisible ? animationDelay : '0s' }}
        >
            <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 transition-transform duration-1000 ease-in-out transform hover:scale-105">
                <blockquote className="text-gray-900">
                    <p>
                        {isExpanded ? testimonial.body + ' ' : truncateText(testimonial.body, maxLength)}
                        {testimonial.body.length > maxLength && (
                            <button onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-indigo-600 hover:underline">
                                {isExpanded ? ` Read less` : ' Read more'}
                            </button>
                        )}
                    </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                    <img alt="" src={testimonial.author.image}
                         className="h-10 w-10 rounded-full bg-gray-50"/>
                    <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`${testimonial.author.title}`}</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default function Testimonials() {
    const [visibleCards, setVisibleCards] = useState(new Array(testimonials.length).fill(false));
    const [titleVisible, setTitleVisible] = useState(false);

    const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === titleRef.current) {
                            setTitleVisible(true);
                        } else {
                            const index = testimonialsRef.current.indexOf(entry.target as HTMLDivElement);
                            if (index !== -1) {
                                setVisibleCards((prev) => {
                                    const updated = [...prev];
                                    updated[index] = true;
                                    return updated;
                                });
                            }
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        testimonialsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            testimonialsRef.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="bg-stone-100 py-24 sm:py-32">
            <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${titleVisible ? 'fade-in visible' : 'fade-in'}`} ref={titleRef}>
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    testimonialsRef.current[index] = el;
                                }}
                                key={index}
                            >
                                <TestimonialCard
                                    testimonial={testimonial}
                                    index={index}
                                    isVisible={visibleCards[index]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}