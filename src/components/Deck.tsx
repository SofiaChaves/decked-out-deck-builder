import useDeck from '../hooks/useDeck';
import CardPreview from './CardPreview';

const Deck = () => {
    const deck = useDeck((state) => state.deck);
    const removeCard = useDeck((state) => state.removeCard);

    return (
        <div className="flex flex-col space-y-3">
            {deck.map((card, index) => (
                <button
                    role="button"
                    key={card.name + index}
                    onClick={() => removeCard(card)}
                >
                    <CardPreview key={card.name + index} card={card} />
                </button>
            ))}
            {deck.length === 0 && (
                <p className="text-slate-500">
                    Your deck is empty, try adding a card by clicking on one
                    from the left hand grid
                </p>
            )}
        </div>
    );
};
export default Deck;
