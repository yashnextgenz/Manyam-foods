'use client';

import { useMemo } from 'react';

const COLOR_CLASSES = {
  primary: 'bg-primary',
  white: 'bg-white',
};

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function WaterDropParticles({ count = 15, color = 'primary' }) {
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const rand = seededRandom(i * 137.5 + 42);
      const size = Math.round(4 + rand * 8);
      const opacity = (0.15 + rand * 0.35).toFixed(2);
      const left = (rand * 100).toFixed(1);
      const delayFall = (rand * 6).toFixed(1);
      const durationFall = (4 + rand * 6).toFixed(1);
      const delayFloat = (rand * 5).toFixed(1);
      const durationFloat = (3 + rand * 4).toFixed(1);
      const delayFade = (rand * 3).toFixed(1);
      const durationFade = (2 + rand * 3).toFixed(1);
      const animType = i % 3; // 0=fall, 1=float, 2=fade

      items.push({
        key: i,
        size,
        opacity,
        left,
        delayFall,
        durationFall,
        delayFloat,
        durationFloat,
        delayFade,
        durationFade,
        animType,
      });
    }
    return items;
  }, [count]);

  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.primary;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.key}
          className={`absolute rounded-full ${colorClass}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            opacity: p.opacity,
            ...(p.animType === 0
              ? {
                  animation: `water-fall ${p.durationFall}s linear ${p.delayFall}s infinite`,
                }
              : p.animType === 1
                ? {
                    top: `${10 + seededRandom(p.key * 73 + 11) * 80}%`,
                    animation: `water-float ${p.durationFloat}s ease-in-out ${p.delayFloat}s infinite`,
                  }
                : {
                    top: `${20 + seededRandom(p.key * 53 + 7) * 60}%`,
                    animation: `water-fade ${p.durationFade}s ease-in-out ${p.delayFade}s infinite`,
                  }),
          }}
        />
      ))}
    </div>
  );
}
