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
    <Card className="border-0 popup-hover">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>created By: </CardDescription>
        <CardDescription>{project.owner}</CardDescription>
      </CardContent>
      <CardFooter>{project.deadline}</CardFooter>
    </Card>
  );
}

export default ProjectCard;
