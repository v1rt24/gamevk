import {ref} from 'vue';

export const useAudio = () => {
    const img = ref('off');

    const audio = new Audio('/audio/soundtrack.mp3');
    audio.volume = .1;
    audio.addEventListener('loadedmetadata', () => {
        audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0);
    });

    const playAudio = () => {
        if (audio.paused) {
            audio.play();
            img.value = 'up';
        } else {
            audio.pause();
            img.value = 'off';
        }
    };

    return {
        img,
        playAudio,
    };
};