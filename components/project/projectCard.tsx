import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DocumentData } from "firebase/firestore";

function ProjectCard({ project }: { project: DocumentData }) {
  return (
    <Card className="border-0 popup-hover w-72 min-h-44">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{project?.description || "No Description"}</CardDescription>
      </CardContent>
      <CardFooter className="justify-between text-sm">
        <div>{project.deadline.split("T")[0]}</div>
        <div>{project.deadline.split("T")[1]}</div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
