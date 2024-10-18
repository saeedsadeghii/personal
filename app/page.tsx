"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { color } from "framer-motion";
import { title, subtitle } from "@/components/primitives";

export default function App() {
  return (
    <section>
      <header className="flex justify-center items-center text-6xl flex-col">
        <h1 className="font-semibold flex items-center">
          Let Your Web application to
          <span
            className={title({ color: "pink", className: "font-extrabold" })}
            style={{ fontSize: "5rem" }}
          >
            Hakha
          </span>
        </h1>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </header>
    </section>
  );
}
