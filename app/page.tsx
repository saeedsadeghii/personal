"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        hello
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        how are you
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        hava chetore
      </AccordionItem>
    </Accordion>
  );
}
