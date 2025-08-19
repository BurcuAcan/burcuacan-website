export const playClickSound = (frequency: number = 800, duration: number = 150) => {
  const soundEnabled = localStorage.getItem('sound-enabled');
  
  if (soundEnabled !== 'true') {
    return;
  }

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  } catch (error) {
    // Silently fail if audio context is not supported
  }
};

// Sound with delay for links that navigate
export const playClickSoundWithDelay = (frequency: number = 800, callback?: () => void, delay: number = 150) => {
  const soundEnabled = localStorage.getItem('sound-enabled');
  
  if (soundEnabled !== 'true') {
    callback?.();
    return;
  }

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + delay / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + delay / 1000);

    // Execute callback after sound finishes
    if (callback) {
      setTimeout(() => {
        callback();
      }, delay);
    }
  } catch (error) {
    callback?.();
  }
};

export const SoundTypes = {
  NAVIGATION: 600,      
  SOCIAL: 750,          
  PROJECT: 500,         
  THEME: 900,           
  EMAIL: 680,           
  BUTTON: 800,         
} as const;
