import Link from "next/link";

export default function Menu({ Icon, menu, path, currentPath }) {
    return (
        <Link href={path} className={`pl-3 flex items-center gap-3 w-full h-[49px] rounded-[14px] ${
            path === currentPath
            ? "bg-white text-[#FF6767]"
            : "text-white"
        }`}>
            <Icon className="h-6 w-6" />
            <p className="font-medium text-[16px]">{menu}</p>
        </Link>
    )
}