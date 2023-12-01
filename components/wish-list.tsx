"use client"
// import { getmetaDataMeta } from "@/lib/meta";
import { User } from "@prisma/client"
import { useState } from "react";
import Image from 'next/image'

export const WishList = (user?: User) => {

    const [metaData, MetaData] = useState(null)
    const [status, setStatus] = useState('idle')

    async function handleFormSubmit(formData: FormData) {
        // e.preventDefault();
        // console.dir(e)
        // const form = e
        // const formData = new FormData(form);
        // const url = formData.get("url");
        const url = formData.get("url") as string;
        if (!url) {
            setStatus('idle');
            return;
        }

        const metaData = await fetch('/api/get-meta', {
            method: 'POST',
            body: JSON.stringify({ url: url }),
            cache: 'force-cache',
        }).then(res => {
            setStatus('success');
            return res.json()
        })
            .catch(err => {
                console.log(err)
                setStatus('error');
            })


        MetaData(metaData)

        // const meta = await getmetaDataMeta([url]);
    }

    // console.log('metaData', metaData)

    return (
        <>
            <h2 className="text-2xl font-medium my-2">Wish List:</h2>
            <div className="border rounded-lg p-6">
                {/* {status} */}
                <form className="flex flex-col w-96">
                    <div className="flex flex-col items-start gap-2">
                        <input type="text" placeholder="url" name="url" id="url" className="border-2 w-full"></input>
                        <input
                            value="Add Item"
                            type="submit"
                            formAction={(data) => {
                                setStatus('loading');
                                handleFormSubmit(data)
                            }}
                            disabled={status === 'loading'}
                            className="bg-green-500 disabled:bg-slate-400 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                        />
                    </div>
                </form>
                {/* <form action={getAll}>
                    <input type="submit" value="Get records" ></input>
                </form> */}

                {metaData && (
                    <div key={metaData?.title} className="text-black">
                        <p>Item: {metaData?.title}</p>
                        <p>{metaData?.description}</p>
                        <Image src={metaData?.image} alt="item image" width={100} height={100} />
                    </div>
                )}

            </div>
        </>
    )
}