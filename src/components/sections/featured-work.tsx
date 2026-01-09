"use client";

import { Section } from "@/components/ui/section";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const works = [
    { id: 1, title: "Neon Future", category: "Web Design", color: "bg-purple-900" },
    { id: 2, title: "Cyber Punk", category: "Branding", color: "bg-blue-900" },
    { id: 3, title: "Eco Systems", category: "App Dev", color: "bg-green-900" },
    { id: 4, title: "Urban Drift", category: "Marketing", color: "bg-red-900" },
];

export function FeaturedWork() {
    const containerRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slider = sliderRef.current;
            if (!slider) return;

            const totalWidth = slider.scrollWidth;
            const windowWidth = window.innerWidth;

            // Horizontal scroll animation
            gsap.to(slider, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalWidth - windowWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                x: -(totalWidth - windowWidth),
                ease: "none",
            });
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="overflow-hidden bg-black">
            <div className="flex h-screen items-center px-4 md:px-20">
                <div className="mr-20 shrink-0">
                    <h2 className="font-display text-5xl font-bold uppercase leading-none text-white md:text-8xl">
                        Selected
                        <br />
                        <span className="text-secondary">Work</span>
                    </h2>
                </div>
                <div ref={sliderRef} className="flex gap-10">
                    {works.map((work) => (
                        <div
                            key={work.id}
                            className={`relative h-[60vh] w-[80vw] shrink-0 overflow-hidden rounded-2xl md:w-[40vw] ${work.color}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-secondary font-mono mb-2">{work.category}</span>
                                <h3 className="font-display text-4xl font-bold uppercase">{work.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
