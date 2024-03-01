import mongoose from "npm:mongoose@7.6.3";
import { Contact } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Contact>({
  title: String,
  athor: String,
  content: String,
  date: String,
});

export default mongoose.model<Contact>("Contact", schema);