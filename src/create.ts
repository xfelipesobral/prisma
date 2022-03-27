import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.createMany({
        data: [
            {
                duration: 200,
                name: 'Curso1',
                description: 'Descricao do curso de teste 1'
            },
            {
                duration: 200,
                name: 'Curso2',
                description: 'Descricao do curso de teste 2'
            },
            {
                duration: 200,
                name: 'Curso3',
                description: 'Descricao do curso de teste 3'
            },
            {
                duration: 200,
                name: 'Curso4',
                description: 'Descricao do curso de teste 4'
            },
            {
                duration: 200,
                name: 'Curso5',
                description: 'Descricao do curso de teste 5'
            },
        ]
    })

    console.log(result)
}

main()