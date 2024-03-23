import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function create() {
    try {

        const data = [
            { first_name: 'zihad', last_name: 'zihad', address: 'khulna' },
            { first_name: 'abid', last_name: 'faisal', address: 'dhaka' },
            { first_name: 'abu', last_name: 'naim', address: 'shibabri' }
        ]

        const singleInput = {first_name: 'abid',last_name: 'faisal', address: 'khulna'}
        const res = await prisma.user.createMany(
            {
                data,
                // skipDuplicates: true,
            }
        )
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}




async function read(){
    try {
        const res = await prisma.user.findUnique(
            {
                where: {
                    // first_name: {
                    //     startsWith: 'z'
                    // }
                    id: 5
                }
            }
        );
        console.log(res);
    } catch (error) {
        console.log(error)
    }
    finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}


async function update(){
    try {

        const res = await prisma.user.updateMany(
            {
                // data: singleInput
                // skipDuplicates: true,
                where: {
                    first_name: 'updated',
                },
                data: {
                    first_name: 'zihad'
                }
            }
        )
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}

async function deleted(){
    try {

        const res = await prisma.user.delete(
            {
                // data: singleInput
                // skipDuplicates: true,
                where: {
                    id: 5
                }
            }
        )
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}


create();
// read();
// update();
// deleted();