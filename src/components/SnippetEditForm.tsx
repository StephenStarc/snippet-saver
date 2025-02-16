'use client';
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet
}
export default function SnippetEditForm({snippet}:SnippetEditFormProps){

    const [code,setCode] = useState(snippet.code)
    const handleEditorChange = (value: string = '') => {
        setCode(value)
    }

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)
    return(
        <div>
            <Editor language="javascript"
            height={'40vh'}
            theme="vs-dark"
            defaultValue={snippet.code}
            options={{minimap:{enabled:false}}}
            onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button className="p-2 border rounded" type="submit">Save</button>
            </form>
        </div>
    ) 

}