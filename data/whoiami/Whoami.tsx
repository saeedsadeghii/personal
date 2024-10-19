"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Saeed from "@/assets/saeedPics/Picsart_24-10-19_00-09-05-903.png";
const Whoami = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Card isPressable >
          <Image src={Saeed} width={300} alt="saeed" />
        </Card>
      </div>
      <div className="flex-2">
        <Card>
          <h2>Who am I?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            distinctio debitis itaque sit eligendi autem ipsum illo nisi eos
            placeat accusamus adipisci perspiciatis voluptates voluptas
            obcaecati explicabo corporis, nulla possimus. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Repudiandae, a quibusdam facilis
            eligendi veritatis nulla ipsa ducimus, porro libero, saepe
            blanditiis voluptatem ut vel quisquam odio sequi in architecto fuga?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aliquam iure saepe, suscipit recusandae perspiciatis. Voluptas
            laborum esse consequatur, voluptatum, velit maiores quidem
            consectetur itaque soluta similique alias minima ullam?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Whoami;
