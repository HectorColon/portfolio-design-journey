import { db } from "@/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { useState } from "react";

interface FirestoreData extends DocumentData {
    id?: string;
}

export const useFirestoreDelete = <T extends FirestoreData>(collectionName: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // DELETE: Delete a document
    const deleteDocument = async (id: string) => {
        try {
            setLoading(true);
            const documentRef = doc(db, collectionName, id);
            await deleteDoc(documentRef);
            setError(null);
        } catch (e) {
            console.error("Error deleting document:", e);
            setError("Failed to delete document.");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, deleteDocument };
}