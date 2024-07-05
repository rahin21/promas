"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import LogoutButton from "@/components/logoutButton";
import { IoPersonCircleSharp } from "react-icons/io5";
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
          <Link href="/dashboard/profile" className="text-3xl text-primary">
            <IoPersonCircleSharp />
          </Link>
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
}
