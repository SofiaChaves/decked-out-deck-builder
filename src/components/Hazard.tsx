type Props = {
    filled?: boolean;
};

const Hazard = ({ filled = true }: Props) => {
    return (
        <div
            className={`w-2 h-2 rounded-full ${
                filled ? 'bg-red-400' : 'border border-red-400'
            } `}
        />
    );
};
export default Hazard;
