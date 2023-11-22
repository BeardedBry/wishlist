import { UserButton } from "@clerk/nextjs";

export const User = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
