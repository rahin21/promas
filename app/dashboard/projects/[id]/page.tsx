import { db } from '@/app/firebase/config';
import Title from '@/components/title';
import { fetchDocumentById } from '@/lib/getProjectById';
import { collection, doc, getDoc } from 'firebase/firestore';
import React from 'react'

async function Project({params}:{params:{id:string}}) {
    const {id} = params;
    let data;
    console.log(id);
    try {
        data = await fetchDocumentById("projects", id);
    } catch (error) {
        console.log(error);
    }
    console.log(data);
  return (
    <div>
        <Title>
            Project
        </Title>
    </div>
  )
}

export default Project