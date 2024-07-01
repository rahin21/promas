import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config"; // Adjust the import path as necessary

export async function getProjectsByOwner(ownerEmail: string) {
  // Create a reference to the projects collection
  const projectsRef = collection(db, "projects");

  // Create a query against the collection to find projects by the owner
  const q = query(projectsRef, where("owner", "==", ownerEmail));

  try {
    // Execute the query
    const querySnapshot = await getDocs(q);

    // Process the results
    const projects = querySnapshot.docs.map((doc) => doc.data());
    return projects;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
}


