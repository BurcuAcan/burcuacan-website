"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
}

const TextReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8
}: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const words = children.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration,
                ease: "easeOut" as const
            }
        },
    };

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-2"
                    variants={wordVariants}
                    style={{
                        transformOrigin: "bottom center",
                        transformStyle: "preserve-3d"
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextReveal;
