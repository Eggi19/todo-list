export default function IconContainer({Icon, className}) {
    return (
        <div className={`flex justify-center items-center bg-[#FF6767] w-[36px] h-[36px] rounded-[8px] ${className}`}>
            <Icon className="h-6 w-6 text-white" />
        </div>
    );
};