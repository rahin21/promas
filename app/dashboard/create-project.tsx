"use client";
import { ProjectForm } from "@/components/project/projectForm"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { FaPlus } from "react-icons/fa";

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
                <Button variant={"outline"}>
                    <span className="mr-3"><FaPlus /></span>
                    Add New Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl">Add New Project</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when {"you're"} done.
                    </DialogDescription>
                </DialogHeader>
                <ProjectForm userEmail={userEmail} />
            </DialogContent>
        </Dialog>
    )
}