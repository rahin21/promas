"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import logo from '@/public/images/logo.png'
import LogoutButton from '@/components/logoutButton';
import { ImHome } from 'react-icons/im';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BiCog } from 'react-icons/bi';
export default function Header() {
    return (
        <header className="py-4">
            <nav className="container flex justify-between">
                <div>
                    <Link href="/dashboard">
                        <Image src={logo} alt="logo" height={35} />
                    </Link>
                </div>
                <div className='text-2xl flex gap-4 items-center'>
                    <LogoutButton />
                    <Link href="/settings">
                        <BiCog />
                    </Link>
                    <Link href="/profile">
                        <IoPersonCircleSharp />
                    </Link>
                </div>
            </nav>
        </header>
    );
}