import { cards } from '../assets/cards';
import useDeck from '../hooks/useDeck';
import Card from './Card';

const CardsList = () => {
    const addCard = useDeck((state) => state.addCard);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cards.map((card) => (
                <div
                    role="button"
                    key={card.name}
                    onClick={() => addCard(card)}
                >
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
};

export default CardsList;
