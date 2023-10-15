import './index.css'
export default function Dashboard() {
  return <div className="flex flex-col items-center pt-48 px-24">
    <div className='w-full flex gap-24'>
      <div className="flex flex-col items-center bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px] before:absolute before:h-[500px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[500px] after:w-[340px] after:translate-y-[100px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-2xl mt-6">Supply</div>
      </div>
      <div className="flex flex-col items-center bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px] before:absolute before:h-[500px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-y-[200px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-2xl mt-6">Borrow</div>

      </div>
    </div>
  </div>
}