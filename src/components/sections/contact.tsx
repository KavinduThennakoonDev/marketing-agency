"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

function InputGroup({ label, id, type = "text", textarea = false }: { label: string; id: string; type?: string; textarea?: boolean }) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    const Component = textarea ? "textarea" : "input";

    return (
        <div className="relative mb-8">
            <Component
                id={id}
                type={type}
                rows={textarea ? 4 : undefined}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={cn(
                    "peer w-full border-b border-white/20 bg-transparent py-2 text-xl text-white outline-none transition-colors focus:border-primary",
                    textarea && "resize-none"
                )}
            />
            <label
                htmlFor={id}
                className={cn(
                    "absolute left-0 top-2 cursor-text text-white/50 transition-all duration-300",
                    (focused || value) && "-top-6 text-sm text-primary"
                )}
            >
                {label}
            </label>
        </div>
    );
}

export function Contact() {
    return (
        <Section className="bg-gradient-to-b from-black to-surface/50">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <h2 className="mb-6 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
                        Let's <span className="text-primary">Talk</span>
                    </h2>
                    <p className="max-w-md text-lg text-white/60">
                        Ready to dominate the digital landscape? Tell us about your project and let's create something extraordinary.
                    </p>
                </div>
                <form className="mt-8 md:mt-0">
                    <InputGroup id="name" label="Your Name" />
                    <InputGroup id="email" label="Your Email" type="email" />
                    <InputGroup id="message" label="Project Details" textarea />
                    <Button size="lg" className="w-full md:w-auto">
                        Send Message
                    </Button>
                </form>
            </div>
        </Section>
    );
}
