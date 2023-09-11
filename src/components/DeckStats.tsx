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
                <h3 className="font-bold">
                    Treasure
                    <span className="pl-2 text-slate-500">{totalTreasure}</span>
                </h3>
                <div className="flex flex-wrap gap-1">
                    {[...Array(totalTreasure).keys()].map((_) => (
                        <Treasure key={_} />
                    ))}
                </div>
            </article>

            {/* Ember */}
            <article className="space-y-1.5 ">
                <h3 className="font-bold">
                    Embers
                    <span className="pl-2 text-slate-500">{totalEmbers}</span>
                </h3>
                <div className="flex flex-wrap gap-1">
                    {[...Array(totalEmbers).keys()].map((_) => (
                        <Ember key={_} />
                    ))}
                </div>
            </article>

            {/* Hazard */}
            <article className="space-y-1.5">
                <h3 className="font-bold">
                    Blocked Hazard
                    <span className="pl-2 text-slate-500">{totalHazard}</span>
                </h3>
                <div className="flex flex-wrap gap-1">
                    {[...Array(Math.abs(totalHazard)).keys()].map((_) => (
                        <Hazard key={_} filled={totalHazard > 0} />
                    ))}
                </div>
            </article>

            {/* Clank */}
            <article className="space-y-1.5">
                <h3 className="font-bold">
                    Blocked Clank
                    <span className="pl-2 text-slate-500">{totalClank}</span>
                </h3>
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
