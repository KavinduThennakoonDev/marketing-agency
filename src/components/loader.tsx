"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Loader({ onComplete }: { onComplete: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            },
        });

        const text = textRef.current;
        const progress = progressRef.current;
        const container = containerRef.current;

        if (!text || !progress || !container) return; // Safety check

        tl.to(text, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        })
            .to(
                progress,
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: "expo.inOut",
                },
                "-=0.5"
            )
            .to(text, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            })
            .to(
                progress,
                {
                    scaleY: 200, // Expand to cover screen vertically? Or just fade out?
                    // Let's do a reveal effect instead
                    height: "100vh",
                    duration: 1,
                    ease: "power4.inOut",
                },
                "-=0.2"
            )
            .to(container, {
                y: "-100%",
                duration: 1,
                ease: "expo.inOut",
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
            <h1
                ref={textRef}
                className="font-display text-4xl font-bold tracking-widest text-white opacity-0 md:text-8xl"
            >
                ELEVATE
            </h1>
            <div className="mt-8 w-64 overflow-hidden bg-white/10 h-1">
                <div
                    ref={progressRef}
                    className="h-full w-full origin-left scale-x-0 bg-primary"
                />
            </div>
        </div>
    );
}
