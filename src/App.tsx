import CardsList from './components/CardsList';
import Deck from './components/Deck';
import DeckStats from './components/DeckStats';
import useDeck from './hooks/useDeck';

function App() {
    const deck = useDeck((state) => state.deck);
    const clearDeck = useDeck((state) => state.clearDeck);

    return (
        <div className={import.meta.env.DEV ? 'debug-screens' : ''}>
            <div className="container mx-auto p-5">
                {/* Title */}
                <h1 className="text-4xl font-bold my-10 mt-5">
                    Decked Out 2{' '}
                    <span className="text-slate-400">Deck Builder</span>
                </h1>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-16">
                    {/* List */}
                    <div className="md:col-span-2 space-y-5">
                        <h1 className="text-2xl font-bold">All Cards</h1>
                        <CardsList />
                    </div>

                    {/* Deck */}
                    <div className="space-y-12 order-first md:order-last">
                        <div className="space-y-5">
                            <h1 className="text-2xl font-bold">
                                Your Deck Stats
                            </h1>
                            <DeckStats />
                        </div>

                        <div className="space-y-5">
                            <div className="flex gap-5 items-end justify-between">
                                <h1 className="text-3xl font-bold">
                                    Your Deck
                                </h1>
                                {deck.length > 0 && (
                                    <button
                                        onClick={clearDeck}
                                        className="underline text-slate-500"
                                    >
                                        Clear Deck
                                    </button>
                                )}
                            </div>

                            <Deck />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
