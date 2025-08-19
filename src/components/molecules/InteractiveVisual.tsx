"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Settings, Circle, Square, Triangle, Star, Heart, Zap, Volume2, VolumeX } from 'lucide-react';
import { startAmbientMusic, stopAmbientMusic } from '../../utils/ambientMusic';

interface Shape {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType<{ rotateX: any; rotateY: any; animationSpeed: number }>;
  sound: number; // Ses frekansı
}

const shapes: Shape[] = [
  {
    id: 'circle',
    name: 'Circle',
    icon: Circle,
    sound: 440, // A4
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-interactive shadow-xl"
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #38bdf8, #0284c7)",
            "linear-gradient(135deg, #60a5fa, #2563eb)",
            "linear-gradient(135deg, #38bdf8, #0284c7)",
          ],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    )
  },
  {
    id: 'square',
    name: 'Square',
    icon: Square,
    sound: 523.25, // C5
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-interactive shadow-xl"
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #38bdf8, #0284c7)",
            "linear-gradient(135deg, #60a5fa, #2563eb)",
            "linear-gradient(135deg, #38bdf8, #0284c7)",
          ],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )
  },
  {
    id: 'triangle',
    name: 'Triangle',
    icon: Triangle,
    sound: 659.25, // E5
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-4 shadow-xl"
        style={{
          rotateX,
          rotateY,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(120deg, rgb(var(--primary)), rgb(var(--secondary)))'
        }}
        animate={{
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    )
  },
  {
    id: 'star',
    name: 'Star',
    icon: Star,
    sound: 783.99, // G5
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-3 shadow-xl"
        style={{
          rotateX,
          rotateY,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          background: 'radial-gradient(circle, rgb(var(--primary)), rgb(var(--secondary)))'
        }}
        animate={{
          rotate: [0, 72, 144, 216, 288, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )
  },
  {
    id: 'heart',
    name: 'Heart',
    icon: Heart,
    sound: 880, // A5
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-0 shadow-xl"
        style={{
          rotateX,
          rotateY,
          clipPath: 'path("M24,42.7l-2.9-2.64C10.8,30.72,4,24.56,4,17 C4,10.84,8.84,6,15,6c3.48,0,6.82,1.62,9,4.18C26.18,7.62,29.52,6,33,6 C39.16,6,44,10.84,44,17c0,7.56-6.8,13.72-17.1,23.08L24,42.7z")',
          background: 'linear-gradient(45deg, rgb(var(--primary)), rgb(var(--secondary)))',
          transform: 'scale(1.2)'
        }}
        animate={{
          scale: [1.1, 1.3, 1.1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )
  },
  {
    id: 'lightning',
    name: 'Lightning',
    icon: Zap,
    sound: 1046.5, // C6
    component: ({ rotateX, rotateY, animationSpeed }) => (
      <motion.div
        className="absolute inset-6 shadow-xl"
        style={{
          rotateX,
          rotateY,
          clipPath: 'polygon(20% 0%, 40% 0%, 10% 50%, 25% 50%, 0% 100%, 15% 100%, 45% 50%, 30% 50%)',
          background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: animationSpeed * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )
  }
];

const InteractiveVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(4);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const springConfig = { stiffness: 400, damping: 80 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  const currentShape = shapes[currentShapeIndex];

  // Ses durumu state'i
  useEffect(() => {
    // localStorage'dan ses durumunu oku
    const soundState = localStorage.getItem('interactive-sound-enabled');
    setIsSoundEnabled(soundState === 'true');
  }, []);

  // Ses çalma fonksiyonu
  const playSound = (frequency: number = 800, duration: number = 120) => {
    if (!isSoundEnabled) return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
      console.log('Audio context not available');
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleShapeChange = (index: number) => {
    const shape = shapes[index];
    setCurrentShapeIndex(index);
    setShowSettings(false);
    playSound(shape.sound, 150); // Şekil değişirken karakteristik ses çıkar
  };

  const handleSpeedChange = (speed: number) => {
    setAnimationSpeed(speed);
    // Hız değişikliği için farklı bir ses tonu
    const speedSounds = { 6: 220, 4: 330, 2: 440, 1: 660 };
    playSound(speedSounds[speed as keyof typeof speedSounds] || 440, 100);
  };

  const handleSettingsToggle = () => {
    setShowSettings(!showSettings);
    playSound(showSettings ? 370 : 740, 100); // Açma/kapama için farklı tonlar
  };

  const handleSoundToggle = () => {
    const newSoundState = !isSoundEnabled;
    setIsSoundEnabled(newSoundState);
    localStorage.setItem('interactive-sound-enabled', newSoundState.toString());

    // Ambient müzik başlat/durdur
    if (newSoundState) {
      startAmbientMusic();
    } else {
      stopAmbientMusic();
    }
  };

  return (
    <div className="relative">
      {/* Ana Interactive Visual */}
      <motion.div
        ref={ref}
        className="lg:w-100 lg:h-100 md:w-75 md:h-75 relative flex items-center justify-center rounded-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
      >
        {/* Current Shape */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentShape.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <currentShape.component
              rotateX={rotateX}
              rotateY={rotateY}
              animationSpeed={animationSpeed}
            />
          </motion.div>
        </AnimatePresence>

        {/* Inner blur effect */}
        <motion.div
          className="absolute inset-5 rounded-full bg-slate-100 dark:bg-slate-900 opacity-20"
          style={{ filter: 'blur(15px)', rotateX, rotateY }}
        />
      </motion.div>

      {/* Settings Button */}
      <motion.button
        className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-10"
        onClick={handleSettingsToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-interactive
      >
        <motion.div
          animate={{ rotate: showSettings ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="absolute -top-2 -right-2 bg-card border border-border rounded-xl shadow-xl p-4 z-20 min-w-[280px]"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shape Selection */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-card-foreground mb-3">Choose Shape</h3>
              <div className="grid grid-cols-3 gap-2">
                {shapes.map((shape, index) => (
                  <motion.button
                    key={shape.id}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 ${index === currentShapeIndex
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                      }`}
                    onClick={() => handleShapeChange(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <shape.icon className="w-5 h-5" />
                    <span className="text-xs">{shape.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Animation Speed */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-card-foreground mb-3">Animation Speed</h3>
              <div className="flex gap-2">
                {[
                  { label: 'Slow', value: 6 },
                  { label: 'Normal', value: 4 },
                  { label: 'Fast', value: 2 },
                  { label: 'Ultra', value: 1 }
                ].map((speed) => (
                  <motion.button
                    key={speed.label}
                    className={`px-3 py-2 rounded-lg text-xs transition-all duration-200 ${animationSpeed === speed.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                      }`}
                    onClick={() => handleSpeedChange(speed.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {speed.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sound Control */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-card-foreground mb-3">Sound Effects</h3>
              <motion.button
                className={`w-full px-3 py-2 rounded-lg text-xs transition-all duration-200 flex items-center justify-center gap-2 ${isSoundEnabled
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                  }`}
                onClick={handleSoundToggle}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSoundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{isSoundEnabled ? 'Sound On' : 'Sound Off'}</span>
              </motion.button>
            </div>

            {/* Current Info */}
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Current: <span className="text-primary font-medium">{currentShape.name}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveVisual;