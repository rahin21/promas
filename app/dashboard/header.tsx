"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/public/images/logo.png";
import LogoutButton from "@/components/logoutButton";
import { ImHome } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiCog } from "react-icons/bi";
import CreateProject from "./create-project";
export default function Header() {
  const path = usePathname();
  return (
    <header className="py-4">
      <nav className="container flex justify-between">
        <div>
          <Link href="/dashboard">
            <Image src={logo} alt="logo" height={45} />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {(path === "/dashboard") && <CreateProject />}
          <Link href="/settings" className="text-2xl">
            <BiCog />
          </Link>
          <Link href="/profile" className="text-3xl text-primary">
            <IoPersonCircleSharp />
          </Link>
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
}
