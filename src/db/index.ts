import { PrismaClient } from "@prisma/client";

// Access to database
export const db = new PrismaClient();
