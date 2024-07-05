
import React from "react";
import { BreadcrumbSection } from "@/components/breadcrumb-tasks";
import { BsCheckSquare } from "react-icons/bs";
import CreateTask from "@/components/task/createTask";
import { getTask } from "@/lib/localstorage";

async function Task({ params }: { params: { id: string } }) {

  const { id } = params;
  let data;

  try {
    data = getTask(id);
    console.log("Task Info", data);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="w-full">
      <div className="container">
        <BreadcrumbSection item={data?.name} />
        <h1 className="font-semibold text-2xl flex gap-3 items-center">
          <BsCheckSquare className="text-primary" />
          Project: {data?.name}
        </h1>
        <div className="flex justify-between mb-3">
          <div>Owner: {data?.owner}</div>
          <div>Deadline: {data?.deadline}</div>
        </div>
        <div className="bg-blue-200 h-1 w-full mb-2"></div>
        <h2 className="fw-bold text-xl text-bold">Available Tasks</h2>
        <div className="flex flex-wrap gap-4 py-3">
          <CreateTask project={data?.name} />
        </div>
      </div>
    </section>
  );
}

export default Task;
