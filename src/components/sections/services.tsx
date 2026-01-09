"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Palette, Globe, Megaphone, Search, TrendingUp, BarChart } from "lucide-react";

const services = [
    {
        title: "Branding",
        description: "Identity systems that speak louder than words.",
        icon: Palette,
    },
    {
        title: "Web Design",
        description: "Immersive, award-winning digital experiences.",
        icon: Globe,
    },
    {
        title: "Digital Marketing",
        description: "Campaigns that cut through the noise.",
        icon: Megaphone,
    },
    {
        title: "SEO",
        description: "Dominate search results and drive organic traffic.",
        icon: Search,
    },
    {
        title: "Social Growth",
        description: "Build a loyal community around your brand.",
        icon: TrendingUp,
    },
    {
        title: "Performance Ads",
        description: "Data-driven strategies for maximum ROI.",
        icon: BarChart,
    },
];

export function Services() {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = cardsRef.current?.children;
            if (!cards) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <Section ref={containerRef} className="relative z-10">
            <div className="mb-20 text-center">
                <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">
                    Our <span className="text-primary">Services</span>
                </h2>
                <p className="mt-4 text-white/60">Comprehensive solutions for modern brands.</p>
            </div>

            <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:bg-white/10"
                    >
                        <service.icon className="mb-6 h-10 w-10 text-secondary transition-colors group-hover:text-primary" />
                        <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                        <p className="text-white/60">{service.description}</p>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                    </Card>
                ))}
            </div>
        </Section>
    );
}
