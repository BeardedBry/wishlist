import { WishList } from "@/components/wish-list";
import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function Dashboard() {

    const authUser = auth();

    // // createUserProfile();
    // async function getAll() {
    //     // "use server"
    //     const allUsers = await prisma.user.findMany()
    //     console.log(allUsers)
    //     return allUsers;
    // }
    // const users = await getAll();
    // get user from prisma db with matching clerk user_id
    let dbUser;
    try {
        dbUser = await prisma.user.findUnique({
            where: {
                id: authUser?.userId ?? ""
            }
        });
    } catch (error) {
        console.log(error);
    }


    return (
        <main className="flex min-h-screen flex-col items-center p-16">
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl">Welcome to your dashboard {dbUser?.name}</p>
                <p className="text-2xl">You are logged in!</p>
            </div>
            <div className="mt-12">
                <WishList />
            </div>

            {/* <div className="my-3">
                {users && users?.map((user) => (
                    <div key={user.id} className="text-black">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
                )}

            </div> */}
        </main>
    )
}