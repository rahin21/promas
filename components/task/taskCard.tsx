import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TaskCard({ task }: { task: any }) {
  return (
    <Card className="border-0 popup-hover w-72 min-h-44">
      <CardHeader>
        <CardTitle className="text-xl">{task.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{task.description || "No Description"}</CardDescription>
      </CardContent>
      <CardFooter className="justify-between text-sm">
        <div>
          {task.deadline.split("T")[0]}
        </div>
        <div>{task.deadline.split("T")[1]}</div>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;