import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, container = true, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32 relative", className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6">{children}</div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
