import { BellIcon, CalendarDaysIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import IconContainer from "./iconContainer";
export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#F8F8F8] h-[100px] px-20">
      <div className="font-semibold text-[32px] text-[#FF6767]">
        To <span className="text-black">-Do</span>
      </div>
      <div className="flex relative h-[36px] w-[695px] rounded-[8px]">
        <input className="h-full w-full rounded-[8px] font-semibold text-[12px] pl-5" placeholder="Search your task here..." />
        <IconContainer className="absolute right-0 top-1/2 -translate-y-1/2" Icon={MagnifyingGlassIcon} />
      </div>
      <div className="flex items-center gap-7">
        <div className="flex gap-3">
          <IconContainer Icon={BellIcon} />
          <IconContainer Icon={CalendarDaysIcon} />
        </div>
        <div className="font-medium">
          <p className="text-[15px]">Tuesday</p>
          <p className="text-[14px] text-[#3ABEFF]">20/06/2025</p>
        </div>
      </div>
    </div>
  );
}
