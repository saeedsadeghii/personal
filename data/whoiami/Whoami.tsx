"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import whoAmI_Saeed from "@/assets/saeedPics/Picsart_24-10-19_00-09-05-903.png";
import { title } from "@/components/primitives";
import { whoAmITexts } from "@/config/site";
const Whoami = () => {
  return (
    <div>
      <h1 className={` text-6xl text-center my-10`}>Who Am I</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <Card isPressable>
            <Image
              src={whoAmI_Saeed}
              alt="Description"
              width={500}
              height={300}
            />
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="p-7 h-full">
            <div className="mb-7">
              <h2 className={title({ color: "yellow",size:"lg" })}>
                Hi Dears this is{" "}Saeed
              </h2>
            </div>
            {whoAmITexts.map((text) => (
              <div className="grid gap-5 font-thin text-lg">
                <div className="grid gap-y-3 mb-5">
                  <h3 className={title({ color: "foreground" , size:"sm"})}>
                    {text.titile}
                  </h3>
                  <p>{text.text}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
