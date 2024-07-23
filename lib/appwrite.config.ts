import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_API_KEY: API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66966f170008e9d32e40").setKey("ac14808d365c9f1cd1f499441661a5ded3bb89c1427e938c32c7050865c147e4a72320c16bd580c41cecbfc3fab9c29c141f1075a6ac88423cfc4c0d21a00bc6f02ad8e4e1fcc82a4ea308df4bb6c50e03d672cf3f44cc860d6f993cf36f1adea53d2691fc3fb3fdedb0fb5c349bff5f17115811cc0e91434d3b6ef86e571ed2");

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
