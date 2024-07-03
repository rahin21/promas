"use client";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { getProjectsByOwner } from "@/lib/getProjectByOwner";
import ProjectCard from "@/components/project/projectCard";
import { BreadcrumbSection } from "@/app/dashboard/breadcrumb";
import Link from "next/link";
import Title from "@/components/title";


// SWR fetcher function that uses your Firestore function
const fetchProjects = async (email: string) => {
  const projects = await getProjectsByOwner(email);
  return projects;
};

export default function Home() {

  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signin");
      } else {
        setUserEmail(user.email);
      }
    }
  }, [user, loading, router]);

  // Use SWR to fetch projects data
  const { data, error: dataError } = useSWR(
    userEmail ? ["projects", userEmail] : null,
    () => fetchProjects(userEmail!)
  );

  if (loading || (!data && !dataError)) {
    return (
      <div className="container" role="status">
        <ImSpinner9 className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  // console.log(data);
  if (error || dataError) {
    return <p>Error: {error ? error.message : dataError.message}</p>;
  }

  if (user) {
    return (
      <section className="">
        <div className="container w-full">
          <BreadcrumbSection item={"Home"} />
          <Title>
            Projects
          </Title>
          <div className="flex flex-wrap gap-4 py-3">
            {data &&
              data.map((project, i) => (
                <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
                  <ProjectCard  project={project} />
                </Link>
              ))}
          </div>
        </div>
      </section>
    );
  }

  return null; // or a loading indicator while the redirect happens
}
