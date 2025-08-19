"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Palette, Coffee, Heart, Send, Download } from 'lucide-react';
import { useTheme } from 'next-themes';

interface FloatingActionsProps {
    className?: string;
}

const FloatingActions = ({ className = "" }: FloatingActionsProps) => {
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [likeCount, setLikeCount] = useState(42);
    const [isLiked, setIsLiked] = useState(false);
    const [showNotification, setShowNotification] = useState<string | null>(null);
    const { theme, setTheme } = useTheme();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Component mount olduğunda durumları kontrol et
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Like durumu
            const liked = localStorage.getItem('portfolio-liked');
            const savedCount = localStorage.getItem('portfolio-like-count');

            if (liked) setIsLiked(true);
            if (savedCount) setLikeCount(parseInt(savedCount));

            // Ses durumu
            const soundState = localStorage.getItem('sound-enabled');
            if (soundState) setSoundEnabled(soundState === 'true');
        }
    }, []);

    // Notification gösterme
    const showNotificationMessage = (message: string) => {
        setShowNotification(message);
        setTimeout(() => setShowNotification(null), 3000);
    };

    // Ses efekti çalma fonksiyonu
    const playSound = (frequency: number = 800, duration: number = 100) => {
        if (!soundEnabled) return;

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

    const actions = [
        {
            icon: Palette,
            label: 'Toggle Theme',
            color: 'bg-purple-500',
            sound: 523.25,
            action: () => {
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
                showNotificationMessage(`${newTheme === 'dark' ? '🌙' : '☀️'} ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme activated!`);
            }
        },
        {
            icon: Send,
            label: 'Contact Me',
            color: 'bg-blue-500',
            sound: 659.25,
            action: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    showNotificationMessage('📧 Scrolled to contact section!');
                }
            }
        },
        {
            icon: Coffee,
            label: 'Buy Me Coffee',
            color: 'bg-amber-500',
            sound: 783.99,
            action: () => {
                // Gerçek bir coffee link'i ekleyebilirsiniz
                window.open('https://buymeacoffee.com/burcuacan', '_blank');
                showNotificationMessage('☕ Thanks for the coffee support!');
            }
        },
        {
            icon: Heart,
            label: `Like (${likeCount})`,
            color: isLiked ? 'bg-red-500' : 'bg-gray-500',
            sound: 880,
            action: () => {
                if (!isLiked) {
                    setLikeCount(prev => prev + 1);
                    setIsLiked(true);
                    showNotificationMessage('❤️ Thanks for the like!');

                    // Local storage'a kaydet
                    localStorage.setItem('portfolio-liked', 'true');
                    localStorage.setItem('portfolio-like-count', String(likeCount + 1));
                } else {
                    setLikeCount(prev => prev - 1);
                    setIsLiked(false);
                    showNotificationMessage('💔 Like removed');

                    localStorage.removeItem('portfolio-liked');
                    localStorage.setItem('portfolio-like-count', String(likeCount - 1));
                }
            }
        },
        {
            icon: Download,
            label: 'Download CV',
            color: 'bg-green-500',
            sound: 440,
            action: () => {
                // CV download
                const link = document.createElement('a');
                link.href = '/yasar_burcu_acan_cv.pdf';
                link.download = 'yasar_burcu_acan_cv.pdf';
                link.click();
                showNotificationMessage('📄 CV download started!');
            }
        },
    ];

    // Component mount olduğunda like durumunu kontrol et
    useState(() => {
        if (typeof window !== 'undefined') {
            const liked = localStorage.getItem('portfolio-liked');
            const savedCount = localStorage.getItem('portfolio-like-count');

            if (liked) setIsLiked(true);
            if (savedCount) setLikeCount(parseInt(savedCount));
        }
    });

    const handleActionClick = (action: typeof actions[0]) => {
        action.action();
        playSound(action.sound, 120);
    };

    const toggleSound = () => {
        const newSoundState = !soundEnabled;
        setSoundEnabled(newSoundState);

        // localStorage'a ses durumunu kaydet
        localStorage.setItem('sound-enabled', newSoundState.toString());

        if (newSoundState) {
            playSound(880, 100);
            showNotificationMessage('🔊 Sound effects enabled!');
        } else {
            showNotificationMessage('🔇 Sound effects disabled');
        }
    };

    return (
        <>
            {/* Notification */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        className="fixed top-8 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg z-50"
                        initial={{ opacity: 0, y: -50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                    >
                        {showNotification}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`fixed bottom-8 right-8 z-40 ${className}`}>
                {/* Action buttons - always visible */}
                <div className="space-y-3">
                    {actions.map((action, index) => (
                        <motion.button
                            key={action.label}
                            className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg flex items-center justify-center group relative`}
                            onClick={() => handleActionClick(action)}
                            initial={{ scale: 0, y: 20 }}
                            animate={{
                                scale: 1,
                                y: 0,
                                transition: { delay: index * 0.1 + 0.1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            data-interactive
                        >
                            <action.icon className="w-5 h-5" />

                            {/* Tooltip */}
                            <motion.div
                                className="absolute right-14 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100"
                                initial={{ x: 10 }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {action.label}
                            </motion.div>
                        </motion.button>
                    ))}
                </div>

                {/* Ses kontrol butonu */}
                <motion.button
                    className="mt-3 w-10 h-10 bg-secondary text-secondary-foreground rounded-full shadow-md flex items-center justify-center"
                    onClick={toggleSound}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    data-interactive
                >
                    {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </motion.button>
            </div>
        </>
    );
};

export default FloatingActions;
