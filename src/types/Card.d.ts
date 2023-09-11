import { Rarity } from './Rarity';

export type Card = {
    name: string;
    description: string;
    rarity: Rarity;
    permanent?: boolean;
    ethereal?: boolean;
    clank?: number;
    hazard?: number;
    treasure?: number;
    ember?: number;
    limit: number;
};
