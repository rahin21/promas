import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import { BreadcrumbSection } from "@/components/breadcrumb-projects";
import { BsCheckSquare } from "react-icons/bs";
import CreateTask from "@/components/task/createTask";
import TaskCard from "@/components/task/taskCard";
import Link from "next/link";
import { getTasksFor } from "@/lib/localstorage";

async function Project({ params }: { params: { id: string } }) {

  const { id } = params;
  let data;
  let tasks;

  try {

    data = await fetchDocumentById("projects", id);
    tasks = getTasksFor(data?.name) || [];

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
          {tasks && tasks.map((task: any, i: number) => (
            <Link href={`/dashboard/tasks/${task.name}`} key={i}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
