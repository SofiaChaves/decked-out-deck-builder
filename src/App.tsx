import CardsList from './components/CardsList';
import Deck from './components/Deck';
import DeckStats from './components/DeckStats';
import useDeck from './hooks/useDeck';

function App() {
    const deck = useDeck((state) => state.deck);
    const clearDeck = useDeck((state) => state.clearDeck);

    return (
        <div className="bg-white/90 text-slate-800 dark:bg-slate-800 dark:text-white">
            <div className="container p-5 mx-auto">
                {/* Title */}
                <h1 className="my-10 mt-5 text-4xl font-bold">
                    Decked Out 2{' '}
                    <span className="text-slate-400">Deck Builder</span>
                </h1>

                {/* Grid */}
                <div className="grid gap-16 md:grid-cols-3">
                    {/* List */}
                    <div className="space-y-5 md:col-span-2">
                        <h1 className="text-2xl font-bold">All Cards</h1>
                        <CardsList />
                    </div>

                    {/* Deck */}
                    <div className="order-first space-y-12 md:order-last">
                        <div className="space-y-5">
                            <h1 className="text-2xl font-bold">
                                Your Deck Stats
                            </h1>
                            <DeckStats />
                        </div>

                        <div className="space-y-5">
                            <h1 className="text-3xl font-bold">Your Deck</h1>
                            {deck.length > 0 && (
                                <div className="flex items-end justify-between w-full gap-5">
                                    <span className="text-slate-400">
                                        {deck.length < 40
                                            ? `${deck.length}/40 Cards in the deck`
                                            : `Achieved maximum cards per deck`}
                                    </span>
                                    <button
                                        onClick={clearDeck}
                                        className="underline text-slate-500"
                                    >
                                        Clear Deck
                                    </button>
                                </div>
                            )}

                            <Deck />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="sticky bottom-0 bg-white border-t dark:bg-slate-800 border-slate-300 dark:border-slate-700">
                <div className="container flex flex-wrap justify-between gap-3 px-5 py-3 mx-auto text-xs lg:text-sm">
                    <span>{'Made with ❤️ by Sofia Chaves'}</span>
                    <span>
                        Find me on{' '}
                        <a
                            href="https://www.linkedin.com/in/sofiacps/"
                            className="underline text-slate-500"
                        >
                            LinkedIn
                        </a>
                    </span>
                    <span>
                        Support this project by giving it a ⭐ on{' '}
                        <a
                            href="https://github.com/SofiaChaves/decked-out-deck-builder"
                            className="underline text-slate-500"
                        >
                            GitHub
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default App;
