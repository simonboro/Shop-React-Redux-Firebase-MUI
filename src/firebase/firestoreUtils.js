import { firestore } from "./config";

export const usersCollection = firestore.collection("users");
