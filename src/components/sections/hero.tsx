"use client";

import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/3d/hero-scene";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const titleWords = titleRef.current?.querySelectorAll("span");

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (titleWords) {
                tl.from(titleWords, {
                    y: 100,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1.2,
                    delay: 0.5, // Wait for loader
                });
            }

            tl.from(
                textRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                },
                "-=0.5"
            );

            tl.from(
                buttonsRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                },
                "-=0.8"
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center"
        >
            <HeroScene />

            <div className="relative z-10 max-w-5xl">
                <h1
                    ref={titleRef}
                    className="font-display text-5xl font-bold uppercase leading-none tracking-tight md:text-8xl lg:text-9xl"
                >
                    <span className="inline-block">We</span>{" "}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Build
                    </span>{" "}
                    <span className="inline-block">Brands</span>{" "}
                    <br className="hidden md:block" />
                    <span className="inline-block">That</span>{" "}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                        Dominate
                    </span>{" "}
                    <br className="hidden md:block" />
                    <span className="inline-block">The</span>{" "}
                    <span className="inline-block">Digital</span>{" "}
                    <span className="inline-block">World</span>
                </h1>

                <p
                    ref={textRef}
                    className="mx-auto mt-8 max-w-2xl text-lg text-white/60 md:text-xl"
                >
                    We are a future-forward agency crafting digital experiences that leave a lasting impact.
                    Premium design, cutting-edge technology, and strategic mastery.
                </p>

                <div
                    ref={buttonsRef}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" variant="primary">
                        Start a Project
                    </Button>
                    <Button size="lg" variant="outline">
                        View Our Work
                    </Button>
                </div>
            </div>
        </section>
    );
}
