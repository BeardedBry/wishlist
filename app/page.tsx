import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className='my-3 text-4xl text-center font-semibold'>
      Wish List is a simple app that lets you create a wish list for the holidays.
      </p>
      <div className='my-4'>
        <Link
          href="/dashboard" 
          className='bg-blue-400 font-medium p-4 py-2 rounded-xl text-white text-sm'>Login
          </Link>
      </div>
    </main>
  )
}
