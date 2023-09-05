
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
     email: "bharath4@gmail.com",
     name: "bharath4",
     posts: {
        create: [
            {
                title: "bharath title2"
            },
            {
                title: "bharath title3"
            },
        ]
     }
    }
  });
  console.log(user)
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })