"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import whoAmI_Saeed from "@/assets/saeedPics/Picsart_24-10-19_00-09-05-903.png";
import { title } from "@/components/primitives";
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
            <h2 className={title({color:"foreground"})}>Hi Dears this is saeed</h2>
            <p>
              From the very beginning, the world of computers was more than just
              an interest for me—it was like the language of zeros and ones was
              something I could use to express anything. That's why I decided to
              dive into this field and learn everything from the ground up. I
              believe programming is the very language that shapes the world,
              and with it, anything can be built.
              <br/>As a computer science
              student, I’ve spent over two years immersed in web development. My
              goal has always been to break past limitations and master the
              latest technologies in modern web development. My expertise lies
              in advanced frameworks like Next.js and React, which enable me to
              build efficient, cutting-edge web applications.
              <br/>Throughout this
              journey, I’ve started numerous projects from scratch, learning
              something new with each challenge. Now, with all my passion and
              experience, I’m ready to take on larger, more complex projects and
              apply my skills to their fullest potential.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
