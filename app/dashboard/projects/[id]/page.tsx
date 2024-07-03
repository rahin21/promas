import { db } from "@/app/firebase/config";
import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function Project({ params }: { params: { id: string } }) {
  const { id } = params;
  let data;

  try {
    data = await fetchDocumentById("projects", id);
  } catch (error) {
    console.log(error);
  }
  console.log(data);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-xl capitalize">
            Project
          </CardTitle>
          <CardTitle className="font-semibold text-lg capitalize">
            Name: {data?.name}
          </CardTitle>
          <CardTitle className="font-semibold text-lg ">
            Manager: {data?.owner}{" "}
          </CardTitle>
          <CardTitle className="font-semibold text-lg ">
            Deadline: {data?.deadline} 🔴
          </CardTitle>
        </CardHeader>
      </Card>

      
    </div>
  );
}

export default Project;
