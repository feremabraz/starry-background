export const constellationNames = [
  "Andromeda",
  "Aquarius",
  "Aries",
  "Cancer",
  "Canis Major",
  "Capricornus",
  "Cassiopeia",
  "Cygnus",
  "Draco",
  "Gemini",
  "Leo",
  "Libra",
  "Lyra",
  "Orion",
  "Pegasus",
  "Perseus",
  "Pisces",
  "Sagittarius",
  "Scorpius",
  "Taurus",
  "Ursa Major",
  "Ursa Minor",
  "Virgo"
];

export function getRandomConstellationName(): string {
  const randomIndex = Math.floor(Math.random() * constellationNames.length);
  return constellationNames[randomIndex];
}
