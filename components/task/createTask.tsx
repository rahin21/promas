"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../app/firebase/config";
import { FaPlusCircle } from "react-icons/fa";
import { TaskForm } from "./taskForm";

export default function CreateTask() {

    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (!loading) {
            if (!user) {
                console.log("no user");
            } else {
                setUserEmail(user.email);
            }
        }
    }, [user, loading]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-44 min-h-44 rounded-sm bg-white popup-hover flex flex-col justify-center items-center gap-3">
                <FaPlusCircle className="text-5xl text-primary" />
                    Create Task
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Add New Task</DialogTitle>
                    <DialogDescription>
                        Fillup the form below to add a new task.
                    </DialogDescription>
                </DialogHeader>
                <TaskForm userEmail={userEmail} />
            </DialogContent>
        </Dialog>
    )
}