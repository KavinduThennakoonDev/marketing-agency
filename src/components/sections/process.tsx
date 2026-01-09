"use client";

import { Section } from "@/components/ui/section";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
    { number: "01", title: "Discovery", description: "Market research and competitive analysis." },
    { number: "02", title: "Strategy", description: "Defining the path to dominance." },
    { number: "03", title: "Design", description: "Visuals that demand attention." },
    { number: "04", title: "Development", description: "Pixel-perfect engineering." },
    { number: "05", title: "Launch", description: "Deployment and optimization." },
];

export function Process() {
    const containerRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const stepsEl = stepsRef.current?.children;
            if (!stepsEl) return;

            gsap.from(stepsEl, {
                scrollTrigger: {
                    trigger: stepsRef.current,
                    start: "top 70%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse",
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <Section ref={containerRef}>
            <div className="mb-20">
                <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Process</h2>
            </div>

            <div ref={stepsRef} className="grid gap-8 md:grid-cols-5">
                {steps.map((step, index) => (
                    <div key={index} className="relative border-l border-white/20 pl-6">
                        <span className="mb-4 block font-mono text-xl text-primary">{step.number}</span>
                        <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                        <p className="text-sm text-white/60">{step.description}</p>
                        <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-primary box-shadow-glow" />
                    </div>
                ))}
            </div>
        </Section>
    );
}
