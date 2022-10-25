import {Ref} from 'vue';

interface IScore {
    zerg: number;
    primal: number;
    terran: number;
    infested: number;
    protoss: number;
    taldarim: number;
    hybrid: number;
}

export type RaceType = keyof IScore;

export interface IProvide {
    flag: Ref<string>;
    resultRace: Ref<RaceType>;
    score: IScore;
    totalGame: Ref<IScore>;
    totalGames: Ref<number>;
    goToResult: (race: RaceType) => void;
}