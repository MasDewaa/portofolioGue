import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{ x: number; y: number; size: number; opacity: number; twinkle: number }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        twinkle: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1), // lebih lambat dan halus
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // easing twinkle
        star.opacity += star.twinkle * 0.7;
        if (star.opacity > 1) {
          star.opacity = 1;
          star.twinkle *= -1;
        }
        if (star.opacity < 0.2) {
          star.opacity = 0.2;
          star.twinkle *= -1;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        // Dynamic star color based on theme
        const starColor = theme === 'dark' ? '255, 255, 255' : '100, 116, 139';
        ctx.fillStyle = `rgba(${starColor}, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    />
  );
};

export default StarField;