import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import React from "react";
import SwirlingBackground from "@/components/SwirlingBackground";
import WhyUsSection from "@/components/WhyUsSection";
import Hero2 from "@/components/Hero2";
import ServicePageDetailsCard from "@/components/ServicePageDetailsCard";

const items = [
    { id: '1', title: 'First Item', subtitle: 'This is the first item' },
    { id: '2', title: 'Second Item', subtitle: 'This is the second item' },
    // Add more items as needed
];

export default function Example() {
    return (
        <div>
        <ServicePageDetailsCard items={items} />
        </div>
    )
}
