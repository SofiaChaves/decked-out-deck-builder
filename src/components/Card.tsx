import { Card } from '../types/Card';
import { Rarity } from '../types/Rarity';
import Badge from './Badge';
import Clank from './Clank';
import Ember from './Ember';
import Hazard from './Hazard';
import Treasure from './Treasure';

type Props = {
    card: Card;
};
const Card = ({ card }: Props) => {
    const rarityClasses = raritiesClasses[card.rarity];

    return (
        <article
            className={`space-y-2 border-2 py-3 px-4 h-full rounded-lg scale-100 transition-transform hover:scale-105 ${rarityClasses.border} ${rarityClasses.background}`}
        >
            <div className="flex items-center justify-between gap-2">
                <h2 className={`font-bold ${rarityClasses.text}`}>
                    {card.name}
                </h2>

                <div className="flex gap-2 items-center text-xs">
                    {card.clank && (
                        <div className="flex items-center gap-1.5">
                            {card.clank}
                            <Clank />
                        </div>
                    )}
                    {card.hazard && (
                        <div className="flex items-center gap-1.5">
                            {card.hazard}
                            <Hazard />
                        </div>
                    )}

                    {card.treasure && (
                        <div className="flex items-center gap-1.5">
                            {card.treasure}
                            <Treasure />
                        </div>
                    )}

                    {card.ember && (
                        <div className="flex items-center gap-1.5">
                            {card.ember}
                            <Ember />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-1.5">
                {card.permanent && (
                    <Badge
                        backgroundColor="bg-purple-500/30"
                        textColor="text-purple-700 dark:text-purple-400"
                    >
                        Permanent
                    </Badge>
                )}
                {card.ethereal && (
                    <Badge
                        backgroundColor="bg-pink-500/30"
                        textColor="text-pink-600 dark:text-pink-400"
                    >
                        Ethereal
                    </Badge>
                )}
            </div>
            <p className=" text-sm text-slate-400 dark:text-slate-500 line-clamp-2">
                {card.description}
            </p>
        </article>
    );
};
export default Card;

const raritiesClasses = {
    [Rarity.Common]: {
        text: 'text-slate-500 dark:text-slate-400',
        border: 'border-slate-400 dark:border-slate-400',
        background: 'bg-slate-400/5 dark:bg-slate-500/10',
    },
    [Rarity.Uncommon]: {
        text: 'text-emerald-500',
        border: 'border-emerald-500/60',
        background: 'bg-emerald-200/5 dark:bg-emerald-600/10',
    },
    [Rarity.Rare]: {
        text: 'text-blue-400',
        border: 'border-blue-500/60',
        background: 'bg-blue-200/5 dark:bg-blue-600/10',
    },
    [Rarity.Legendary]: {
        text: 'text-orange-400',
        border: 'border-orange-500/60',
        background: 'bg-orange-200/5 dark:bg-orange-600/10',
    },
    [Rarity.Unknown]: {
        text: 'text-slate-400 dark:text-slate-500',
        border: 'border-slate-300 dark:border-slate-600',
        background: 'bg-slate-300/5 dark:bg-slate-600/10',
    },
};
