import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full", className)} {...props} />
);

const AccordionItem = ({ className, ...props }: React.ComponentProps<"details">) => (
  <details className={cn("group rounded-xl border border-border bg-card", className)} {...props} />
);

const AccordionTrigger = ({ className, children, ...props }: React.ComponentProps<"summary">) => (
  <summary
    className={cn(
      "flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
  </summary>
);

const AccordionContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-5 pb-5 text-sm leading-relaxed text-muted-foreground", className)} {...props} />
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
