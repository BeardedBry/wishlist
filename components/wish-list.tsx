"use client"
import { User } from "@prisma/client"

export const WishList = (user?: User) => {

    function handleFormSubmit(formData: FormData) {
        // e.preventDefault();
        // console.dir(e)
        // const form = e
        // const formData = new FormData(form);
        // const url = formData.get("url");
        console.log(formData.get("url"));
    }

    return (
        <>
            <h2 className="text-2xl font-medium my-2">Wish List:</h2>
            <div className="border rounded-lg p-6">
                <form className="flex flex-col w-96">
                    <div className="flex flex-col items-start gap-2">
                        <input type="text" placeholder="url" name="url" id="url" className="border-2 w-full"></input>
                        <input
                            value="Add Item to wishlist"
                            type="submit"
                            formAction={(data) => handleFormSubmit(data)}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                        />
                        
                    </div>
                </form>
                {/* <form action={getAll}>
                    <input type="submit" value="Get records" ></input>
                </form> */}
            </div>
        </>
    )
}