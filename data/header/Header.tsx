"use client";
import React from "react";
import { Button, Card } from "@nextui-org/react";
import { title } from "@/components/primitives";
const Header = () => {
  return (
    <header className="h-[90vh] bg-saeed-pattern bg-bottom bg-contain bg-no-repeat">
      <div className="flex justify-start items-center flex-col gap-y-5 h-full">
        <h1 className="items-center font-dancingscript font-semibold text-6xl">
          Let Your Web Application To
          <span
            className={title({ color: "pink" })}
            style={{ fontSize: "52.5px", marginLeft: "7px", fontWeight: "bold" }}
          >
            Hakha
          </span>
        </h1>
        <p className="text-lg text-pinkk">
          Elevate your web experience with Hakha – the ultimate React UI
          library. Fast, sleek, and designed to impress.
        </p>
        <Button variant="shadow" size="lg" className="">
          Download CV
        </Button>
      </div>
    </header>
  );
};

export default Header;
