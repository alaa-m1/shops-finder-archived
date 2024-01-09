import mongoose from "mongoose";

export async function dbConnect(): Promise<typeof mongoose | undefined> {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_DB_URI));
    console.log(`Database connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(err);
  }
}