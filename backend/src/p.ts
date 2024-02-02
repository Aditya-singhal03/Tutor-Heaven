import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const res = await prisma.user.findMany()
  console.log(res)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })