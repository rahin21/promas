import { fetchDocumentById } from "@/lib/getProjectById";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BreadcrumbSection } from "../../breadcrumb";
import CreateProject from "@/components/project/createProject";
import { BsCheckSquare } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CreateTask from "@/components/task/createTask";

async function Project({ params }: { params: { id: string } }) {
  const { id } = params;
  let data;

  return (
    <section className="w-full">
      <div className="container">
        <BreadcrumbSection item={"Home"} />
        <h1 className="font-semibold text-2xl py-3 flex gap-3 items-center">
          <BsCheckSquare />
          Task: Front-End
        </h1>
        <div className="bg-gray-200 h-1 w-full mb-4"></div>
        <h2 className="fw-bold text-xl">Available Tasks</h2>
        <div className="flex flex-wrap gap-4 py-3">
          <CreateTask />
        </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold text-xl capitalize">
            Task
          </CardTitle>
          <CardTitle className="font-semibold text-lg capitalize">
            Name: Front-End
          </CardTitle>
          <CardTitle className="font-semibold text-lg ">
            Assignee: rejwanislam@gmail.com
          </CardTitle>
          <CardTitle className="font-semibold text-lg ">
            Deadline: 24-Jul-2024T10:49am
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle>Comments</CardTitle>
          <CardDescription className="pt-2">
            <strong>Rahin</strong>: Fix the nav bar
          </CardDescription>
          <CardDescription>
            <strong>Rizvy</strong>: okay
          </CardDescription>


          <Textarea placeholder="Enter a comment" className="my-2" />
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </section>
  );
}

export default Project;
