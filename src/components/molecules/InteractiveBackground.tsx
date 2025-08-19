"use client";

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
}

const InteractiveBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseXSpring = useSpring(mouseX);
    const mouseYSpring = useSpring(mouseY);

    // Partikülleri oluştur - daha az ama daha görünür
    useEffect(() => {
        const createParticles = () => {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 25; i++) { // 50'den 25'e düşürdüm
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 6 + 3, // 4+1'den 6+3'e çıkardım (daha büyük)
                    opacity: Math.random() * 0.7 + 0.3, // 0.5+0.1'den 0.7+0.3'e çıkardım (daha parlak)
                    speed: Math.random() * 1 + 0.3, // Biraz daha yavaş
                });
            }
            setParticles(newParticles);
        };

        createParticles();
        window.addEventListener('resize', createParticles);
        return () => window.removeEventListener('resize', createParticles);
    }, []);

    // Mouse takibi
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Partikülleri hareket ettir
    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev =>
                prev.map(particle => ({
                    ...particle,
                    y: particle.y - particle.speed,
                    x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
                    // Ekran dışına çıkan partikülleri sıfırla
                    ...(particle.y < -10 && {
                        y: window.innerHeight + 10,
                        x: Math.random() * window.innerWidth,
                    })
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        >
            {/* Gradient overlay - daha belirgin */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([x, y]) => `radial-gradient(circle 400px at ${x}px ${y}px, rgba(var(--primary), 0.15), transparent)`
                    )
                }}
            />

            {/* Particles - daha görünür */}
            {particles.map(particle => {
                const distanceFromMouse = Math.sqrt(
                    Math.pow(mousePosition.x - particle.x, 2) +
                    Math.pow(mousePosition.y - particle.y, 2)
                );
                const maxDistance = 200; // 150'den 200'e çıkardım
                const influence = Math.max(0, 1 - distanceFromMouse / maxDistance);

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/60" // /30'dan /60'a çıkardım
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: particle.x,
                            top: particle.y,
                            opacity: particle.opacity + influence * 0.4, // 0.3'ten 0.4'e çıkardım
                        }}
                        animate={{
                            scale: 1 + influence * 0.8, // 0.5'ten 0.8'e çıkardım
                            x: influence * (mousePosition.x - particle.x) * 0.15, // 0.1'den 0.15'e çıkardım
                            y: influence * (mousePosition.y - particle.y) * 0.15,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 80, // 50'den 80'e çıkardım
                            damping: 25 // 20'den 25'e çıkardım
                        }}
                    />
                );
            })}

            {/* Mouse follower glow - daha büyük */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    x: mouseXSpring,
                    y: mouseYSpring,
                }}
            >
                <div
                    className="w-40 h-40 -ml-20 -mt-20 rounded-full" // 32x32'den 40x40'a çıkardım
                    style={{
                        background: 'radial-gradient(circle, rgba(var(--primary), 0.2) 0%, transparent 70%)', // 0.1'den 0.2'ye çıkardım
                        filter: 'blur(25px)', // 20px'den 25px'e çıkardım
                    }}
                />
            </motion.div>
        </div>
    );
};

export default InteractiveBackground;
