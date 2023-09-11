import { cards } from '../assets/cards';
import useDeck from '../hooks/useDeck';
import Card from './Card';

const CardsList = () => {
    const addCard = useDeck((state) => state.addCard);
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((card) => (
                <div
                    role="button"
                    key={card.name}
                    onClick={() => addCard(card)}
                >
                    <Card card={card}>
                        <p className="text-sm text-slate-400 dark:text-slate-500 line-clamp-2">
                            {card.description}
                        </p>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
