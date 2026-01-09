"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "They completely transformed our brand. Sales increased by 200% in the first month.",
        author: "Alex Rivers",
        role: "CEO, TechNova",
    },
    {
        quote: "The attention to detail is unmatched. A truly world-class team.",
        author: "Sarah Jenkings",
        role: "Director, Lume Art",
    },
    {
        quote: "Innovative, professional, and reliable. Highly recommended.",
        author: "Michael Chen",
        role: "Founder, Zenith",
    },
];

export function Testimonials() {
    const containerRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto rotate testimonials
    useGSAP(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section ref={containerRef} className="bg-surface/30 text-center">
            <div className="mx-auto max-w-4xl">
                <Quote className="mx-auto mb-8 h-12 w-12 text-primary" />

                <div className="relative h-64 overflow-hidden">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center
                        ${i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
                    `}
                        >
                            <h3 className="font-display text-3xl font-medium md:text-5xl leading-tight">
                                "{t.quote}"
                            </h3>
                            <div className="mt-8">
                                <p className="font-bold text-lg text-white">{t.author}</p>
                                <p className="text-secondary">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary w-8" : "bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
