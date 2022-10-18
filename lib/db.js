import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://daria123:1234@cluster0.1mu8t04.mongodb.net/authentication-project?retryWrites=true&w=majority"
  );
  return client;
}
