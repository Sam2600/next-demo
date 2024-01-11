import { PrismaClient } from "@prisma/client";

const prismaClientSigleton = () => {
    return new PrismaClient();
}

type prismaClientSigleton = ReturnType<typeof prismaClientSigleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: prismaClientSigleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSigleton();

export default prisma;

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
