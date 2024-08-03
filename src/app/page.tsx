import LogoCloud from "@/components/LogoCloud";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import React from 'react';
import SwirlingBackground from "@/components/SwirlingBackground";
import WhyUsSection from "@/components/WhyUsSection";
import Hero2 from "@/components/Hero2";
import ImageCarousal from "@/components/ImageCarousal";
import ContactUsSection from "@/components/ContactUsSection";

export default function Example() {
    return (
        <div>
            <Hero2/>
            <Features/>
            <ImageCarousal />
            <Statistics/>
            <WhyUsSection/>
            <Testimonials/>
            <ContactUsSection />
        </div>
    )
}
