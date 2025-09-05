import { db } from "@/firebaseConfig";
import { addDoc, collection, DocumentData } from "firebase/firestore";
import { useState } from "react";

interface FirestoreData extends DocumentData {
    id?: string;
}

export const useFirestoreCreate = <T extends FirestoreData>(collectionName: string) => {
    const [loading, setLoading] = useState(true);
    const [createError, setError] = useState<string | null>(null);

    const collectionRef = collection(db, collectionName);

    // CREATE: Add a new document
    const createDocument = async (newData: Omit<T, 'id' | "toFireStore">) => {
        try {
            setLoading(true);
            const docRef = await addDoc(collectionRef, newData);
            return docRef.id;
        } catch (e) {
            console.error("Error adding document:", e);
            setError("Failed to add document.");
        } finally {
            setLoading(false);
        }
    };

    return { loading, createError, createDocument };
}