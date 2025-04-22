"use client";
import { Form } from "@/components/Form/Form";
import planetImage from "../../public/planet.jpg";
import Image from "next/image";
import { schemaProps } from "@/components/Form/formValidation";
import { useState } from "react";
import PilotList from "@/components/PilotList";
export default function Home() {
  const [pilots, setPilots] = useState<schemaProps[]>([]);
  function handlePilotSubmit(data: schemaProps) {
    setPilots((prev) => [...prev, data]);
  }
  return (
    <main className=" w-full flex mt-12 flex-col  justify-center items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-black text-5xl font-bold ">
        Pilot Signup Survey
      </h1>
      <div className="flex flex-row justify-center items-center gap-12">
        <Form onSubmit={handlePilotSubmit} />
        <Image
          className="hidden md:block"
          alt="planet"
          src={planetImage}
          width={350}
          height={350}
        />
      </div>
      <PilotList pilots={pilots} />
    </main>
  );
}
