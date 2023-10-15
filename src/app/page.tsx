import Image from 'next/image'
import './index.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert breath"
          src="/output.png"
          alt="Logo"
          width={480}
          height={480}
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">StarllerX</h1>
        <p className="text-xl text-center">Cross chain lending protocol</p>
      </div>
      <Link className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 mt-12 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" href='/dashboard'>Enter</Link>
    </main>
  )
}
