import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.DB_URI) {
    throw new Error("DB_URI is not defined in environment variables");
}

const client = new MongoClient(process.env.DB_URI);

// ✅ safer connect (NO top-level await issue)
let db;

async function getDB() {
    if (!db) {
        await client.connect();
        db = client.db("suncart-new");
    }
    return db;
}

export const auth = betterAuth({
    database: mongodbAdapter(await getDB()),

    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    secret: process.env.BETTER_AUTH_SECRET,

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
    },
});