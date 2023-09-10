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
                    <span className="text-slate-500 pl-2">{totalTreasure}</span>
                </h3>
                <div className="flex gap-1 flex-wrap">
                    {[...Array(totalTreasure).keys()].map((_) => (
                        <Treasure key={_} />
                    ))}
                </div>
            </article>

            {/* Ember */}
            <article className="space-y-1.5 ">
                <h3 className="font-bold">
                    Embers
                    <span className="text-slate-500 pl-2">{totalEmbers}</span>
                </h3>
                <div className="flex gap-1">
                    {[...Array(totalEmbers).keys()].map((_) => (
                        <Ember key={_} />
                    ))}
                </div>
            </article>

            {/* Hazard */}
            <article className="space-y-1.5">
                <h3 className="font-bold">
                    Blocked Hazard
                    <span className="text-slate-500 pl-2">{totalHazard}</span>
                </h3>
                <div className="flex gap-1">
                    {[...Array(totalHazard).keys()].map((_) => (
                        <Hazard key={_} />
                    ))}
                </div>
            </article>

            {/* Clank */}
            <article className="space-y-1.5">
                <h3 className="font-bold">
                    Blocked Clank
                    <span className="text-slate-500 pl-2">{totalClank}</span>
                </h3>
                <div className="flex gap-1">
                    {[...Array(totalClank).keys()].map((_) => (
                        <Clank key={_} />
                    ))}
                </div>
            </article>
        </section>
    );
};
export default DeckStats;
