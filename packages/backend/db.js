import { Prisma } from 'prisma-binding';

const db = new Prisma({
  typeDefs: './generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: process.env.NODE_ENV !== 'production',
});

export default db;
