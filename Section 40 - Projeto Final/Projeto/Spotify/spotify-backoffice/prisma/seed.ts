import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.band.create({
    data: {
      name: "Michael Jackson",
      slug: "michael-jackson",
      status: "active",
      tracks: {
        create: [
          { title: "Billie Jean", slug: "billie-jean", durationInSeconds: 244 },
          { title: "Billie Jean", slug: "thriller", durationInSeconds: 280 },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
