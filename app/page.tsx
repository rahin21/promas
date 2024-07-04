import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';


async function Index() {

    return (
        <section className='flex h-screen items-center justify-center'>
            <Link href={"/dashboard"}>
                <Button>
                    visit to dashboard
                </Button>
            </Link>
        </section>
    )
}

export default Index