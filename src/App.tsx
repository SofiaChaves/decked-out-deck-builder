import CardsList from './components/CardsList';
import Deck from './components/Deck';
import DeckStats from './components/DeckStats';

function App() {
    return (
        <div className={import.meta.env.DEV ? 'debug-screens' : ''}>
            <div className="container mx-auto">
                {/* Title */}
                <h1 className="text-3xl font-bold my-8">
                    Decked Out 2{' '}
                    <span className="text-slate-400">Deck Builder</span>
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-16">
                    {/* List */}
                    <div className="col-span-2 space-y-5">
                        <h1 className="text-2xl font-bold">All Cards</h1>
                        <CardsList />
                    </div>

                    {/* Deck */}
                    <div className="space-y-12">
                        <div className="space-y-5">
                            <h1 className="text-2xl font-bold">
                                Your Deck Stats
                            </h1>
                            <DeckStats />
                        </div>

                        <div className="space-y-5">
                            <h1 className="text-2xl font-bold">Your Deck</h1>
                            <Deck />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
