"use client";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { ProjectForm } from "@/components/project/projectForm";
import { getProjectsByOwner } from "@/lib/getProjectByOwner";
import ProjectCard from "@/components/project/projectCard";
import { DocumentData } from "firebase/firestore";

export default function Home() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [data, setData] = useState<DocumentData[] | null>(null);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signin");
      } else {
        setUserEmail(user.email);
      }
    }
  }, [user, loading, router, userEmail]);

  useEffect(() => {
    if (userEmail) {
      getProjectsByOwner(userEmail).then((projects) => {
        if (projects.length <= 0) {
          console.log("no data");
        } else {
          setData(projects);
        }
      });
    }
  }, [userEmail]);

  if (loading && !data) {
    return (
      <div className="container" role="status">
        <ImSpinner9 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
 
  if (user) {
    return (
      <section className="">
        <div className="container">
          <h1 className="font-semibold text-xl pb-2">
            Projects
          </h1>
          <div className="flex flex-wrap gap-4 py-3">
            {data &&
              data.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
          <ProjectForm userEmail={userEmail} />
        </div>
      </section>
    );
  }

  return null; // or a loading indicator while the redirect happens
}
