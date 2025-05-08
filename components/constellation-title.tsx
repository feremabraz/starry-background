"use client";

import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { constellationNames } from "@/utils/constellationNames";

// An atom with an initial placeholder value
const constellationAtom = atom<string>("");

export function ConstellationTitle() {
  const [constellation, setConstellation] = useAtom(constellationAtom);
  
  // Set the random constellation name only on the client side
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * constellationNames.length);
    setConstellation(constellationNames[randomIndex]);
  }, [setConstellation]);

  return (
    <h1 className="text-4xl font-bold text-white z-10">
      {constellation}
    </h1>
  );
}
