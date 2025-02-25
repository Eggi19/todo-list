"use client";

import { ArrowRightEndOnRectangleIcon, ClipboardDocumentCheckIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon, Cog6ToothIcon, ListBulletIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Menu from "./menu";
import { usePathname } from "next/navigation";

export default function RightMenu() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col pl-6 relative w-1/5 bg-[#FF6767] rounded-br-[8px] rounded-tr-[8px] mt-16 min-w-[200px] pt-14 pb-14">
      <div className="flex items-center justify-center absolute w-[86px] h-[86px] rounded-full overflow-hidden top-[-43px] left-1/2 -translate-x-1/2">
        <img className="w-full h-full object-cover" src="https://id.iams.asia/cdn-cgi/image/width=520,format=auto,q=90/sites/g/files/fnmzdf4956/files/2021-12/shutterstock_653880481_520x280.png" />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-white">Sundar Gurung</p>
        <p className="font-normal text-white">sundargurung@gmail.com</p>
      </div>
      <div className="flex flex-col gap-2 mt-8 pr-6">
        <Menu Icon={ComputerDesktopIcon} menu="Dashboard" path={"/dashboard"} currentPath={pathname} />
        <Menu Icon={ExclamationTriangleIcon} menu="Vital Task" path={"/vital-task"} currentPath={pathname} />
        <Menu Icon={ClipboardDocumentCheckIcon} menu="My Task" path={"/my-task"} currentPath={pathname} />
        <Menu Icon={ListBulletIcon} menu="Task Categories" path={"/task-categories"} currentPath={pathname} />
        <Menu Icon={Cog6ToothIcon} menu="Settings" path={"/settings"} currentPath={pathname} />
        <Menu Icon={QuestionMarkCircleIcon} menu="Help" path={"/help"} currentPath={pathname} />
      </div>
      <div className="mt-auto">
        <Menu Icon={ArrowRightEndOnRectangleIcon} menu="Logout" path={"/logout"} currentPath={pathname} />
      </div>
    </div>
  );
}
