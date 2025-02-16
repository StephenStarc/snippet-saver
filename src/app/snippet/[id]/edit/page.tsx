import SnippetEditForm from "@/components/SnippetEditForm"
import { db } from "@/db"
import { notFound } from "next/navigation"

interface SnippetEditPageProps{
    params:{
        id:string
    }
}


export default async function SnippetEdit(props : SnippetEditPageProps){
       
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where : {
            id
        }
    })

    if(!snippet){
        return  notFound()
    }
    console.log(snippet)
    return <>
    <SnippetEditForm snippet={snippet}/>
    </>
}