import { cards } from '../assets/cards';
import Card from './Card';

const CardsList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {cards.map((card) => (
                <Card card={card} />
            ))}
        </div>
    );
};

export default CardsList;
