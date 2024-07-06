'use client'
import { useFormState } from 'react-dom';
import * as actions  from '@/actions';
export default function SnippetNew() {

 const [formState, action] = useFormState(actions.createSnippet, {message:""})

    return <div>
        <form action={action}>
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

                {formState.message ? <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null}
                <button type="submit" className=" rounded p-2 bg-blue-200">Submit</button>
            </div>
        </form>
    </div>;
}