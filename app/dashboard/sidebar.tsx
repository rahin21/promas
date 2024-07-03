import { ImHome } from "react-icons/im";
import { BiCog, BiUserCircle } from "react-icons/bi";
import { BsCheckSquare, BsFillGearFill, BsGearFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SideButton({ data }: {
    data: {
        icon: any;
        title: string;
        href: string;
    };
}) {
    const { icon, title, href } = data;
    return (
        <Link href={href} className="">
            <Button variant={"ghost"} className={"text-lg bg-white justify-start space-x-2 w-full"}>
                {icon}
                <span>{title}</span>
            </Button>
        </Link>
    )
}

export default function Sidebar() {
    return (
        <aside className="py-3">
            <nav className="flex flex-col gap-2">
                <SideButton data={{ icon: <BsFillGearFill/>, title: "Dashboard", href: "/dashboard" }} />
                <SideButton data={{ icon: <FaBriefcase/>, title: "Projects", href: "/dashboard/projects" }} />
                <SideButton data={{ icon: <BsCheckSquare/>, title: "Tasks", href: "/dashboard/tasks" }} />
                <SideButton data={{ icon: <BiUserCircle/>, title: "Profile", href: "/dashboard/profile" }} />
                <SideButton data={{ icon: <BsGearFill/>, title: "Settings", href: "/dashboard/settings" }} />
            </nav>
        </aside>
    )
}