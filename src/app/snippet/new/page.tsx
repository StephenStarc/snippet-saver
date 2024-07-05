import {db} from '@/db'
import { redirect } from 'next/navigation';
export default function SnippetNew() {

    async function createSnippet(formData : FormData) {
        'use server';

        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log(snippet)
        redirect('/')
    }
    return <div>
        <form action={createSnippet}>
            <h3 className="text-3xl  font-bold">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div>
                    <label className="flex gap-4" htmlFor="title">Title</label>
               <input name="title" className="border rounded p-2 w-full" id="title"></input>
                </div>
                <div>
                    <label className="flex gap-4" htmlFor="code">Code</label>
               <textarea name="code" className="border rounded p-2 w-full" id="code"></textarea>
                </div>

                <button type="submit" className=" rounded p-2 bg-blue-200">Submit</button>
            </div>
        </form>
    </div>;
}