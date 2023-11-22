import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function Dashboard() {

    const user = auth();

    // console.log(user)

    // async function createUserProfile() {
    //     "use server"
    //     const userCreate = await prisma.user.create({
    //         data: {
    //             name: 'Brian',
    //             email: 'brianburkard@gmail.com',
    //         },
    //     })
    //     console.log(userCreate)
    // }

    // createUserProfile();
    async function getAll() {
        // "use server"
        const allUsers = await prisma.user.findMany()
        // console.log(allUsers)
        return allUsers;
    }

    const users = await getAll();

    return (
        <main className="flex min-h-screen flex-col items-center p-16">
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl">Welcome to your dashboard</p>
                <p className="text-2xl">You are logged in!</p>
            </div>
            <div className="mt-12">
                <button
                >Add Item to wishlist
                </button>
                {/* <form action={getAll}>
                    <input type="submit" value="Get records" ></input>
                </form> */}
            </div>

            <div className="my-3">
                {users && users?.map((user) => (
                    <div key={user.id} className="text-black">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
                )}

            </div>
        </main>
    )
}