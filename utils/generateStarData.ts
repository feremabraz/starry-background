export interface StarData {
    size: number;
    x: number;
    y: number;
    animationDuration: number;
    inConstellation?: boolean;
  }
  
  export interface ConstellationData {
    stars: [number, number][];
  }
  
  export function generateStarData(count: number, constellationCount: number): { stars: StarData[], constellations: ConstellationData[] } {
    const stars = Array.from({ length: count }, () => ({
      size: Math.random() * 2 + 0.2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDuration: Math.random() * 500 + 5000,
      inConstellation: false,
    }));
  
    const constellations: ConstellationData[] = [];
  
    for (let i = 0; i < constellationCount; i++) {
      const constellationSize = Math.floor(Math.random() * 2) + 4;
      const constellationStars: [number, number][] = [];
  
      for (let j = 0; j < constellationSize; j++) {
        const starIndex = Math.floor(Math.random() * count);
        if (!stars[starIndex].inConstellation) {
          stars[starIndex].inConstellation = true;
          constellationStars.push([stars[starIndex].x, stars[starIndex].y]);
        }
      }
  
      constellations.push({ stars: constellationStars });
    }
  
    return { stars, constellations };
  }
    