// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.article.createMany({
    data: [
      { title: 'Article 1', content: 'Contenu 1' },
      { title: 'Article 2', content: 'Contenu 2' },
    ],
  });

  console.log('✅ Données insérées');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
