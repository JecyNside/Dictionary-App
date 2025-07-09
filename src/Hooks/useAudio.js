import { useState, useCallback } from 'react';

export const useAudio = (response) => {
  const [audioElement, setAudioElement] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getAudioUrl = useCallback(() => {
    if (!response?.phonetics || !Array.isArray(response.phonetics)) {
      return null;
    }

    // Try to find audio in order: US -> AU -> UK -> any available
    const preferredRegions = ['us', 'au', 'uk'];
    
    // First try with preferred regions
    for (const region of preferredRegions) {
      const phoneticWithRegion = response.phonetics.find(
        p => p.audio?.includes(`-${region}.mp3`)
      );
      if (phoneticWithRegion?.audio) {
        return phoneticWithRegion.audio;
      }
    }

    // If no regional audio found, get the first available audio
    const firstWithAudio = response.phonetics.find(p => p.audio);
    return firstWithAudio?.audio || null;
  }, [response]);

  const handlePlay = useCallback(() => {
    const audioUrl = getAudioUrl();
    if (!audioUrl) return;

    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    const audio = new Audio(audioUrl);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.play();
    setAudioElement(audio);
  }, [getAudioUrl, audioElement]);

  return {
    isPlaying,
    handlePlay,
    hasAudio: !!getAudioUrl()
  };
};