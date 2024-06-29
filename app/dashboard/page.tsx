"use client";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/logoutButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";


export default function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading) {
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
          Hello World
        </div>
      </section>
    );
  }

  return null; // or a loading indicator while the redirect happens
}
