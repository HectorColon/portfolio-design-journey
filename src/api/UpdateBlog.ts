import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, DocumentData, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface FirestoreData extends DocumentData {
    id?: string;
}

export const useFirestoreUpdate = <T extends FirestoreData>(collectionName: string) => {
    const [loading, setLoading] = useState(true);
    const [updateError, setError] = useState<string | null>(null);

    // UPDATE: Update an existing document
    const updateDocument = async (id: string, updatedData: Partial<Omit<T, 'id' | "toFireStore">>) => {
        try {
            setLoading(true);
            const documentRef = doc(db, collectionName, id);
            await updateDoc(documentRef, updatedData);
        } catch (e) {
            console.error("Error updating document:", e);
            setError("Failed to update document.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateDocument;
    }, [updateError]);

    return { loading, updateError, updateDocument };
}