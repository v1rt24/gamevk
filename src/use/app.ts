import {reactive, ref} from 'vue';
import {useScore} from './score';
import {LocalStorageUtil} from '../utils/localStorageUtil';
import {RaceType} from '../types/provide.types';

const sc2TotalGame = import.meta.env.VITE_sc2TotalGame;
const sc2TotalGames = import.meta.env.VITE_sc2TotalGames;

export const useApp = () => {
    const flag = ref('Start');
    const resultRace = ref<RaceType | null>(null);
    const score = reactive(useScore());
    const totalGame = ref(LocalStorageUtil.get(sc2TotalGame) || useScore());
    const totalGames = ref(LocalStorageUtil.get(sc2TotalGames) || 0);

    //
    const goToResult = (race: RaceType) => {
        resultRace.value = race;
        flag.value = 'Results';
    };

    return {
        flag,
        resultRace,
        score,
        totalGame,
        totalGames,
        goToResult,
    };
};