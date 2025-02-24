"use client"

import {useState} from "react";
import {TiDelete} from "react-icons/ti";
import {error} from "next/dist/build/output/log";
import {useRouter} from "next/navigation";

export default function DeleteButton({id}) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async ()=> {
        setIsLoading(true)
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {method: 'DELETE'})
        const json = await res.json()
        if(json.error){
            console.log(error)
            setIsLoading(false)
        }
        if(!json.error){
            setIsLoading(false)
            router.refresh()
            router.push('/')
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={`btn-primary`}>
            {isLoading&& (
                <>
                    <TiDelete/>
                    Deleting..
                </>
            )}
            {!isLoading&& (
                <>
                    <TiDelete/>
                    Delete Ticket
                </>
            )}
        </button>
    )
}
