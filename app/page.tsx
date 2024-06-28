"use client"
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";;
import LogoutButton from "@/components/logoutButton";
import {useAuthState} from "react-firebase-hooks/auth"

export default function Home() {
  const router = useRouter();
  // const user = auth;
  const [user] = useAuthState(auth); 
  
  if(!user){
    router.push("/auth/signin")
  }
  else{
    console.log(user);
  }


  return (
    <main>
      <LogoutButton/>
    </main>
  );
}
