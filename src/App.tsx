import CardsList from './components/CardsList';
import Deck from './components/Deck';

function App() {
    return (
        <div className={import.meta.env.DEV ? 'debug-screens' : ''}>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-8">
                    Decked Out 2{' '}
                    <span className="text-slate-400">Deck Builder</span>
                </h1>
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-3 space-y-5">
                        <h1 className="text-2xl font-bold">All Cards</h1>
                        <CardsList />
                    </div>

                    <div className="space-y-5">
                        <h1 className="text-2xl font-bold">Your Deck</h1>
                        <Deck />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
