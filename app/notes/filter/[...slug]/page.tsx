import {fetchNotes} from "@/lib/api";
interface Props {
    params : Promise<{slug : string[]}> ;
}

export default async function NotesById ({params} : {params : Props}){
const {slug}= await params;
const category = slug[0] === "all" ? undefined : slug[0];
const res = await fetchNotes("", 1, category)
return (
    <>
    <div> {res?.notes }</div>
    </>
)
}