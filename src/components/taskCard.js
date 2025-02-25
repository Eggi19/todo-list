export default function TaskCard({
    image,
    index,
    activatedCardIndex,
    activeOnClick,
    title,
    description,
    createdOn,
    priority,
    status,
    key
}) {
    return (
        <div onClick={() => activeOnClick(index)} key={key} className={`cursor-pointer hover:bg-[#A1A3AB]/[0.17] flex justify-between pr-5 w-[365px] h-[134px] p-2 pl-5 border border-[#A1A3AB] rounded-[14px] 
            ${activatedCardIndex === index
                ? "bg-[#A1A3AB]/[0.17]"
                : ""
            }`}>
            <div className="w-[60%] flex flex-col gap-3">
                <div className="font-semibold text-[18px]">{title}</div>
                <div className="font-normal text-[15px] text-[#747474] tracking-wide">
                    {description.substring(0, 40)}.....
                </div>
                <div className="flex justify-between gap-3">
                    <div className="font-normal text-[11px]">Priority: <span className={`
                        ${
                            priority?.toLowerCase() === "extreme"
                            ? "text-[#F21E1E]"
                            : priority?.toLowerCase() === "moderate"
                            ? "text-[#42ADE2]"
                            : ""
                        }`}>{priority}</span></div>
                    <div className="font-normal text-[11px]">Status: <span className={`
                        ${
                            status?.toLowerCase() === "not started"
                            ? "text-[#F21E1E]"
                            : status?.toLowerCase() === "in progress"
                            ? "text-[#0225FF]"
                            : ""
                        }`}>{status}</span></div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-1">
                <div className="flex items-center justify-center">
                    <img className="flex items-center justify-center rounded-[14px] object-cover w-[88px] h-[88px]" src={image} />
                </div>
                <div className="text-[10px] text-[#A1A3AB]">Created on: {createdOn}</div>
            </div>
        </div>
    )
}