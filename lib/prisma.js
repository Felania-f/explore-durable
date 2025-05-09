import { PrismaClient } from "@/app/generated/prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
export default prisma