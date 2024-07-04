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

function TaskCard({ task }: { task: any }) {
  return (
    <Card className="border-0 popup-hover">
      <CardHeader>
        <CardTitle>{task.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Assignee: </CardDescription>
        <CardDescription>{task.assignee}</CardDescription>
      </CardContent>
      <CardFooter>{task.deadline}</CardFooter>
    </Card>
  );
}

export default TaskCard;