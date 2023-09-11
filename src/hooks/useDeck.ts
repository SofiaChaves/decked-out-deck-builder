import { create } from 'zustand';
import { Card } from '../types/Card';

type DeckStore = {
    deck: Card[];
    addCard: (card: Card) => void;
    removeCard: (card: Card) => void;
    clearDeck: () => void;
};

const useDeck = create<DeckStore>((set) => ({
    deck: [],
    addCard: (card: Card) =>
        set((state: DeckStore) => {
            //Checking if deck is full
            if (state.deck.length >= 40) return {};

            //Checking if card reached max
            if (
                state.deck.filter((unit) => unit.name === card.name).length >=
                card.limit
            )
                return {};

            //Add card
            return { deck: [...state.deck, card] };
        }),
    removeCard: (card: Card) =>
        set((state: DeckStore) => {
            //Getting index to remove
            const indexToRemove = state.deck.indexOf(card);

            //Avoiding mutations
            const newArray = [...state.deck];

            //Removing card
            newArray.splice(indexToRemove, 1);

            //Setting new deck
            return { deck: newArray };
        }),
    clearDeck: () => set({ deck: [] }),
}));

export default useDeck;
