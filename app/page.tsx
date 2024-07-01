'use client'
import React from 'react';
import { db } from '@/app/firebase/config';
import { query, ref, set } from "firebase/database";
import { Button } from "@/components/ui/button";
import { collection, getDocs, addDoc, CollectionReference, DocumentData, QuerySnapshot, updateDoc, doc } from 'firebase/firestore';

const project_data = {
    name: "Todo App",
    owner: "c35asd8f43513asdf45asdf5a1sd3f4asdf",
    deadline: new Date(),
    tasks: [
        "e354315asdf354a3s545s8",
        "e3535451351f354a3s545s8",
        "e3543351354adsf53s545s8"
    ]
}

async function Index() {

    return (
        <main>
            <h1 className='text-2xl'>Hello World</h1>
            <Button>
                Add a sample project data
            </Button>
        </main>
    )
}

export default Index