import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import { BreadcrumbSection } from "../../breadcrumb";
import { BsCheckSquare } from "react-icons/bs";
import CreateTask from "@/components/task/createTask";
import TaskCard from "@/components/task/taskCard";
import Link from "next/link";

const tasks = [
  {
    id: 0,
    name: "Front-End",
    assignee: "rejwanislam@gmail.com",
    deadline: "24-Jul-2024T10:49am",
  },
  {
    id: 1,
    name: "Back-End",
    assignee: "imranhossen@gmail.com",
    deadline: "24-Jul-2024T10:56am",
  },
];

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

          {tasks.map((task, i) => (
            <Link href={`/dashboard/tasks/${task.id}`} key={i}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
