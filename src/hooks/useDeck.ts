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
        set((state: DeckStore) => ({ deck: [...state.deck, card] })),
    removeCard: (card: Card) =>
        set((state: DeckStore) => {
            const indexToRemove = state.deck.indexOf(card);
            const newArray = [...state.deck];
            newArray.splice(indexToRemove, 1);
            return { deck: newArray };
        }),
    clearDeck: () => set({ deck: [] }),
}));

export default useDeck;
