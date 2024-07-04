import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import { BreadcrumbSection } from "../../breadcrumb";
import { BsCheckSquare } from "react-icons/bs";
import CreateTask from "@/components/task/createTask";

async function Project({ params }: { params: { id: string } }) {

  const { id } = params;
  let data;

  try {
    data = await fetchDocumentById("projects", id);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="w-full">
      <div className="container">
        <BreadcrumbSection item={data?.name} />
        <h1 className="font-semibold text-2xl py-3 flex gap-3 items-center">
          <BsCheckSquare className="text-primary" />
          Project: {data?.name}
        </h1>
        <div className="flex justify-between mb-3">
          <div>Owner: {data?.owner}</div>
          <div>Deadline: {data?.deadline}</div>
        </div>
        <h2 className="fw-bold text-xl mb-2">Available Tasks</h2>
        <div className="bg-gray-200 h-1 w-full mb-3"></div>
        <div className="flex flex-wrap gap-4 py-3">
          <CreateTask />
        </div>
      </div>
    </section>
  );
}

export default Project;
