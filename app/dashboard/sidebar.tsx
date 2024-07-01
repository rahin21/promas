import { ImHome } from "react-icons/im";
import { BiCog } from "react-icons/bi";

function SideButton({ data }: {
    data: {
        icon: any;
        title: string;
    };
}) {
    const { icon, title } = data;
    return (
        <a href="#" className="flex items-center space-x-2 py-2 rounded-lg bg-white">
            {icon}
            <span>{title}</span>
        </a>
    )
}

export default function Sidebar() {
    return (
        <aside className="flex flex-col gap-4">
            <nav className="space-y-2">
                <SideButton data={{ icon: <BiCog/>, title: "Dashboard" }} />
                <SideButton data={{ icon: <ImHome/>, title: "Profile" }} />
                <SideButton data={{ icon: <ImHome/>, title: "Settings" }} />
            </nav>
        </aside>
    )
}