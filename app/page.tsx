"use client";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/logoutButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (user) {
    return (
      <main>
        <LogoutButton />
      </main>
    );
  }

  return null; // or a loading indicator while the redirect happens
}
