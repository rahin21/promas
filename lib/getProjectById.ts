import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config"; 

export const fetchDocumentById = async (collectionName: string, documentId: string) => {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };
  