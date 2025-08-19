// Ambient music system for the website
class AmbientMusicSystem {
  private audioContext: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNodes: GainNode[] = [];
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;

  // Peaceful chord progression in C major scale
  private chordProgression = [
    // C major chord (C-E-G)
    { frequencies: [261.63, 329.63, 392.00], duration: 4000 },
    // A minor chord (A-C-E)  
    { frequencies: [220.00, 261.63, 329.63], duration: 4000 },
    // F major chord (F-A-C)
    { frequencies: [174.61, 220.00, 261.63], duration: 4000 },
    // G major chord (G-B-D)
    { frequencies: [196.00, 246.94, 293.66], duration: 4000 },
  ];

  private currentChordIndex = 0;

  async initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Resume context if suspended (browser autoplay policy)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Create master gain for volume control
      this.masterGain = this.audioContext.createGain();
      this.masterGain.connect(this.audioContext.destination);
      this.masterGain.gain.setValueAtTime(0.03, this.audioContext.currentTime); // Very low volume
    }
  }

  async start() {
    if (this.isPlaying) return;

    try {
      await this.initAudioContext();
      this.isPlaying = true;
      this.playNextChord();
    } catch (error) {
      console.warn('Could not start ambient music:', error);
    }
  }

  stop() {
    this.isPlaying = false;
    
    // Stop all oscillators
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    
    this.oscillators = [];
    this.gainNodes = [];
  }

  private playNextChord() {
    if (!this.isPlaying || !this.audioContext || !this.masterGain) return;

    const chord = this.chordProgression[this.currentChordIndex];
    const currentTime = this.audioContext.currentTime;
    
    // Create oscillators for each note in the chord
    chord.frequencies.forEach((frequency, index) => {
      const oscillator = this.audioContext!.createOscillator();
      const gainNode = this.audioContext!.createGain();
      
      // Connect: oscillator -> gainNode -> masterGain -> destination
      oscillator.connect(gainNode);
      gainNode.connect(this.masterGain!);
      
      // Configure oscillator
      oscillator.frequency.setValueAtTime(frequency, currentTime);
      oscillator.type = 'sine'; // Soft, peaceful sound
      
      // Configure envelope (fade in/out)
      gainNode.gain.setValueAtTime(0, currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, currentTime + 1); // 1 second fade in
      gainNode.gain.setValueAtTime(0.3, currentTime + chord.duration / 1000 - 1); 
      gainNode.gain.linearRampToValueAtTime(0, currentTime + chord.duration / 1000); // 1 second fade out
      
      // Start and schedule stop
      oscillator.start(currentTime);
      oscillator.stop(currentTime + chord.duration / 1000);
      
      // Store references
      this.oscillators.push(oscillator);
      this.gainNodes.push(gainNode);
      
      // Clean up when oscillator ends
      oscillator.addEventListener('ended', () => {
        const oscIndex = this.oscillators.indexOf(oscillator);
        if (oscIndex > -1) {
          this.oscillators.splice(oscIndex, 1);
        }
        const gainIndex = this.gainNodes.indexOf(gainNode);
        if (gainIndex > -1) {
          this.gainNodes.splice(gainIndex, 1);
        }
      });
    });

    // Schedule next chord
    setTimeout(() => {
      if (this.isPlaying) {
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chordProgression.length;
        this.playNextChord();
      }
    }, chord.duration);
  }

  setVolume(volume: number) {
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(0.1, volume)), this.audioContext!.currentTime);
    }
  }
}

// Global instance
let ambientMusic: AmbientMusicSystem | null = null;

export const startAmbientMusic = async () => {
  if (!ambientMusic) {
    ambientMusic = new AmbientMusicSystem();
  }
  await ambientMusic.start();
};

export const stopAmbientMusic = () => {
  if (ambientMusic) {
    ambientMusic.stop();
  }
};

export const setAmbientMusicVolume = (volume: number) => {
  if (ambientMusic) {
    ambientMusic.setVolume(volume);
  }
};
