import { atom } from "jotai";
import { getRandomConstellationName } from "@/utils/constellationNames";

export const constellationNameAtom = atom<string>(getRandomConstellationName());
