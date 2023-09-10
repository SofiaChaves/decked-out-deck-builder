import useDeck from '../hooks/useDeck';
import Card from './Card';

const Deck = () => {
    const deck = useDeck((state) => state.deck);
    const removeCard = useDeck((state) => state.removeCard);

    return (
        <div className="space-y-5 flex flex-col">
            {deck.map((card, index) => (
                <button
                    role="button"
                    key={card.name + index}
                    onClick={() => removeCard(card)}
                >
                    <Card key={card.name + index} card={card} />
                </button>
            ))}
        </div>
    );
};
export default Deck;
