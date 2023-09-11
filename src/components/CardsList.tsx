import { cards } from '../assets/cards';
import useDeck from '../hooks/useDeck';
import { Card as CardType } from '../types/Card';
import Card from './Card';

const CardsList = () => {
    const deck = useDeck((state) => state.deck);
    const addCard = useDeck((state) => state.addCard);

    const didCardReachLimit = (card: CardType) =>
        deck.filter((unit) => unit.name === card.name).length >= card.limit;

    const handleCardClick = (card: CardType) => {
        if (didCardReachLimit(card)) return null;

        addCard(card);
    };

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card) => (
                <div
                    role="button"
                    key={card.name}
                    onClick={() => handleCardClick(card)}
                    className={didCardReachLimit(card) ? 'opacity-50' : ''}
                >
                    <Card card={card}>
                        <p
                            className="text-sm text-slate-400 dark:text-slate-500 line-clamp-3 "
                            title={card.description}
                        >
                            {card.description}
                        </p>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
