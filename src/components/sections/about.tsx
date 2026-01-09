"use client";

import { Section } from "@/components/ui/section";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function About() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            const text = textRef.current;
            if (!text) return;

            const words = text.innerText.split(" ");
            text.innerHTML = words
                .map((word) => `<span class="inline-block opacity-20 transition-opacity">${word}</span> `)
                .join("");

            const spans = text.querySelectorAll("span");

            gsap.to(spans, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 1,
                },
                opacity: 1,
                stagger: 0.1,
                ease: "none",
            });
        },
        { scope: containerRef }
    );

    return (
        <Section ref={containerRef} className="bg-surface/50">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 font-display text-sm font-bold uppercase tracking-widest text-primary">
                    Who We Are
                </h2>
                <p
                    ref={textRef}
                    className="font-display text-4xl font-medium leading-tight md:text-6xl lg:text-7xl"
                >
                    We are a team of visionaries, creators, and strategists. We don't just build websites;
                    we engineer digital experiences that captivate, convert, and define the future of your brand.
                    Obsessed with detail, driven by results.
                </p>
            </div>
        </Section>
    );
}
