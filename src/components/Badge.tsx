type Props = {
    backgroundColor: string;
    textColor: string;
    children: React.ReactNode;
};
const Badge = ({ backgroundColor, textColor, children }: Props) => {
    return (
        <div
            className={`px-2 py-1 text-xs text-bold rounded-md ${backgroundColor} ${textColor}`}
        >
            {children}
        </div>
    );
};
export default Badge;
