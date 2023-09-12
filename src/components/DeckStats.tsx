import useDeck from '../hooks/useDeck';
import Clank from './Clank';
import Ember from './Ember';
import Hazard from './Hazard';
import Treasure from './Treasure';

const DeckStats = () => {
    const deck = useDeck((state) => state.deck);

    const totalTreasure = deck.reduce(
        (accumulator, current) => accumulator + (current.treasure || 0),
        0
    );

    const totalEmbers = deck.reduce(
        (accumulator, current) => accumulator + (current.ember || 0),
        0
    );

    const totalHazard = deck.reduce(
        (accumulator, current) => accumulator + (current.hazard || 0),
        0
    );

    const totalClank = deck.reduce(
        (accumulator, current) => accumulator + (current.clank || 0),
        0
    );

    return (
        <section className="space-y-3">
            {/* Treasure */}
            <article className="space-y-1.5 ">
                <div className="flex gap-3">
                    <h3 className="font-bold">Treasure</h3>
                    <span className="text-slate-400">{totalTreasure}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                    {[...Array(totalTreasure).keys()].map((_) => (
                        <Treasure key={_} />
                    ))}
                </div>
            </article>

            {/* Ember */}
            <article className="space-y-1.5 ">
                <div className="flex gap-3">
                    <h3 className="font-bold">Frost Embers</h3>
                    <span className="text-slate-400">{totalEmbers}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                    {[...Array(totalEmbers).keys()].map((_) => (
                        <Ember key={_} />
                    ))}
                </div>
            </article>

            {/* Hazard */}
            <article className="space-y-1.5">
                <div className="flex gap-3">
                    <h3 className="font-bold">Blocked Hazard</h3>
                    <span className="text-slate-400">{totalHazard}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                    {[...Array(Math.abs(totalHazard)).keys()].map((_) => (
                        <Hazard key={_} filled={totalHazard > 0} />
                    ))}
                </div>
            </article>

            {/* Clank */}
            <article className="space-y-1.5">
                <div className="flex gap-3">
                    <h3 className="font-bold">Blocked Clank</h3>
                    <span className="text-slate-400">{totalClank}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                    {[...Array(Math.abs(totalClank)).keys()].map((_) => (
                        <Clank key={_} filled={totalClank > 0} />
                    ))}
                </div>
            </article>
        </section>
    );
};
export default DeckStats;
