type Props = {
    filled?: boolean;
};

const Clank = ({ filled = true }: Props) => {
    return (
        <div
            className={`w-2 h-2 rounded-full ${
                filled ? 'bg-blue-500' : 'border border-blue-500'
            } `}
        />
    );
};
export default Clank;
