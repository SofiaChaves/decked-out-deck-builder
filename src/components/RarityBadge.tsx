import { Rarity } from '../types/Rarity';
import Badge from './Badge';

type Props = {
    rarity: Rarity;
};
const RarityBadge = ({ rarity }: Props) => {
    const rarityClassNames = raritiesClassNames[rarity];

    return (
        <Badge
            backgroundColor={rarityClassNames.background}
            textColor={rarityClassNames.text}
        >
            {rarity}
        </Badge>
    );
};
export default RarityBadge;

const raritiesClassNames = {
    [Rarity.Common]: {
        text: 'text-slate-700',
        background: 'bg-slate-200',
    },
    [Rarity.Uncommon]: {
        text: 'text-green-700',
        background: 'bg-green-200',
    },
    [Rarity.Rare]: {
        text: 'text-blue-700',
        background: 'bg-blue-200',
    },
    [Rarity.Legendary]: {
        text: 'text-amber-700',
        background: 'bg-amber-200',
    },
    [Rarity.Gold]: {
        text: 'text-yellow-700',
        background: 'bg-yellow-200',
    },
};
