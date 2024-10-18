"use client";
import { Accordion, AccordionItem, Button, Card } from "@nextui-org/react";
import { color } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import saeedPic from '@/assets/headerPics/portrait.jpg'
export default function App() {
  return (
    <section>
      <header className="flex justify-center items-center text-6xl flex-col gap-y-5">
        <h1 className="font-semibold flex items-center">
          Let Your Web application to
          <span
            className={title({ color: "pink" })}
            style={{ fontSize: "5rem", marginLeft: "7px", fontWeight: "bold" }}
          >
            Hakha
          </span>
        </h1>
        <p className="text-lg">
          Elevate your web experience with Hakha – the ultimate React UI
          library. Fast, sleek, and designed to impress.
        </p>
        <Button variant="ghost" size="lg" className="">
          Download CV
        </Button>

        <Card className="p-5">
          <Image src={saeedPic} className="rounded-lg" width={420} alt="Saeed"/>
        </Card>
      </header>
    </section>
  );
}
