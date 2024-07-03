import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config"; // Adjust the import path as necessary

export async function getProjectsByOwner(ownerEmail: string) {
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, where("owner", "==", ownerEmail));

  try {
    const querySnapshot = await getDocs(q);
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return projects;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
}
