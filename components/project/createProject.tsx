"use client";
import { ProjectForm } from "@/components/project/projectForm"
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
import { auth } from "@/app/firebase/config";
import { FaPlus, FaPlusCircle } from "react-icons/fa";

export default function CreateProject() {

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
                    Create Project
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Add New Project</DialogTitle>
                    <DialogDescription>
                        Fillup the form below to add a new project.
                    </DialogDescription>
                </DialogHeader>
                <ProjectForm userEmail={userEmail} />
            </DialogContent>
        </Dialog>
    )
}