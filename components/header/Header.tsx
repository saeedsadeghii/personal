"use client";
import React from "react";
import { Button, Card } from "@nextui-org/react";
import { title } from "@/components/primitives";
import Image from "next/image";
import saeedPic from "@/assets/saeedPics/Picsart_24-10-19_00-03-48-982.png";
const Header = () => {
  return (
    <header className="h-[90vh] bg-saeed-pattern bg-bottom bg-contain bg-no-repeat">
      <div className="flex justify-start items-center text-6xl flex-col gap-y-5 h-full pt-16">
        <h1 className="font-semibold items-center">
          Let Your Web
          <span className="mx-3 text-foreground-400"
          >Application</span>
          To
          <span
            className={title({ color: "pink" })}
            style={{ fontSize: "52.5px", marginLeft: "7px", fontWeight: "bold" }}
          >
            Hakha
          </span>
        </h1>
        <p className="text-lg">
          Elevate your web experience with Hakha – the ultimate React UI
          library. Fast, sleek, and designed to impress.
        </p>
        <Button variant="shadow" size="lg" className="">
          Download CV
        </Button>

        {/* <Card className="p-5 pb-0">
          <Image
            src={saeedPic}
            className="rounded-lg"
            width={420}
            alt="Saeed"
          />
        </Card> */}
      </div>
    </header>
  );
};

export default Header;
