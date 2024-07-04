import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BreadcrumbSection } from "../../breadcrumb";
import CreateProject from "@/components/project/createProject";
import { BsCheckSquare } from "react-icons/bs";

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
    <section className="w-full">
        <div className="container">
          <BreadcrumbSection item={"Home"} />
          <h1 className="font-semibold text-2xl py-3 flex gap-3 items-center">
            <BsCheckSquare/>
            Project: {data?.name}
          </h1>
          <div className="bg-gray-200 h-1 w-full mb-4"></div>
          <h2 className="fw-bold text-xl">Available Tasks</h2>
          <div className="flex flex-wrap gap-4 py-3">
            <CreateProject />
          </div>
        </div>
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
    </section>
  );
}

export default Project;
