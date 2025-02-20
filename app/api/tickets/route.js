import {NextResponse} from "next/server";

// METHOD 2 works on the whole route
export const dynamic = 'force-static'
export async function GET(){
    const res = await fetch(`http://localhost:4000/tickets`
    //     METHOD 2 works locally on the route
    //     {next: {revalidate: 0}}
    )

    const tickets = await res.json()
    return NextResponse.json(tickets, {status: 200})
}

export async function POST(request){
    const ticket = await request.json()
    const res = await fetch('http://localhost:4000/tickets', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    const newTicket = await res.json()
    return NextResponse.json(newTicket, {status: 201})
}
