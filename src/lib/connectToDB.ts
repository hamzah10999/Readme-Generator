import mongoose from "mongoose";

let isConnected: boolean = false;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MongoDB URI environment variable");
}

export const connectToDb = async (): Promise<void> => {
  try {
    if (isConnected) return;

    await mongoose.connect(MONGO_URI, {
      dbName: "my-app-db", // Replace with your actual DB name
    });

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", (err as Error).message);
    throw err; // ✅ Let the API handler catch it
  }
};
