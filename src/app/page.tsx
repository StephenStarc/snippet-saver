import { db } from "@/db";
import Link from "next/link";
export default async function Home() {

  const snippet = await db.snippet.findMany()

  const renderedSnippet = snippet.map(snippet => {
    return(
      <Link key={snippet.id}
      href={`/snippet/${snippet.id}`}
      className="flex justify-between items-center  p-2 border rounded" >
       <div> {snippet.title}</div>
       <div>View</div>
        </Link>
    )
  })


  return <>
  <div className="flex justify-between items-center m-2"><h1 className="text-xl font-bold">Snippet saver</h1>
  <Link href={'/snippet/new'} className="border rounded p-2">New</Link>
  </div>
  <div className="flex flex-col gap-4">
    {renderedSnippet}
  </div>
  </>
}
