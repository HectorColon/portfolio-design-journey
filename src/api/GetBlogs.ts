import { useState, useEffect } from 'react';

import {
  collection,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';


interface FirestoreData extends DocumentData {
  id?: string;
}

export const useFirestoreGetBlogs = <T extends FirestoreData>(collectionName: String) => {
  const [blogPosts, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const collectionRef = collection(db, collectionName);

  // READ: Fetch data from Firestore
  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
      const blogPosts = querySnapshot.docs.map(
        (document) => ({ ...document.data(), id: document.id } as T)
      );
      setData(blogPosts);
      setError(null);
    } catch (e) {
      console.error("Error fetching documents:", e);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collectionName]);

  return { blogPosts, loading, error };
};