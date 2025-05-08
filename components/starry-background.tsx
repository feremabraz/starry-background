"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { generateStarData } from '../utils/generateStarData';
import type { StarData, ConstellationData } from '../utils/generateStarData';

interface StarryBackgroundProps {
  starCount?: number;
  maxStars?: number;
  constellationCount?: number;
}

export function StarryBackground({ starCount = 100, maxStars = 1024, constellationCount = 2 }: StarryBackgroundProps) {
  const [starData, setStarData] = useState<{ stars: StarData[]; constellations: ConstellationData[] }>({ stars: [], constellations: [] });
  
  useEffect(() => setStarData(generateStarData(Math.min(starCount, maxStars), constellationCount)), [starCount, maxStars, constellationCount]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-50 pointer-events-none bg-black">
      {starData.stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
          }}
          transition={{
            duration: star.animationDuration / 1000,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      <svg className="absolute top-0 left-0 w-full h-full">
        {starData.constellations.map((constellation, index) => (
          <g key={index}>
            {constellation.stars.map((star, starIndex, array) => {
              if (starIndex === array.length - 1) return null;
              const nextStar = array[starIndex + 1];
              return (
                <line
                  key={starIndex}
                  x1={`${star[0]}%`}
                  y1={`${star[1]}%`}
                  x2={`${nextStar[0]}%`}
                  y2={`${nextStar[1]}%`}
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}

