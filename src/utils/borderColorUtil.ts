import {RaceType} from '../types/provide.types';

export const borderColorUtil = (race: RaceType) => {
    const borderColors = {
        zerg: '#762877',
        primal: '#55a625',
        terran: '#da8618',
        infested: '#f6b773',
        protoss: '#fce356',
        taldarim: '#9d0101',
        hybrid: '#fc7654',
    };

    return borderColors[race];
};