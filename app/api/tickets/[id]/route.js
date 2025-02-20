import {NextResponse} from "next/server";

// METHOD 2 works on the whole route
export async function GET(_, {params}){
    const {id} = await params
    const res = await fetch(`http://localhost:4000/tickets/${id}`
        //     METHOD 2 works locally on the route
        //     {next: {revalidate: 0}}
    )
    const ticket = await res.json()

    if(!res.ok) {
        return NextResponse.json(
            {error:'Cannot find the ticket'},
            {status: 404})
    }
    return NextResponse.json(ticket, {status:200})

}

