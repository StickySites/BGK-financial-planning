"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/content/types";

type ServiceFaqAccordionProps = {
  items: FaqItem[];
};

export function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full min-w-0">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`} className="min-w-0">
          <AccordionTrigger className="gap-3 text-left text-sm sm:gap-4 sm:text-base [&>svg]:shrink-0">
            <span className="min-w-0 flex-1 break-words text-pretty">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="break-words text-pretty text-sm leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
