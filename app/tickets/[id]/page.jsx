
async function getTicket (id) {
    const res = await fetch('http://localhost:4000/tickets/' + id,{
        next:{
            revalidate: 30 // the time before it takes data from cash seconds
        }
    })
    return res.json()
}

export default async function TicketDetails({params}) {
    const {id} = await params
    const ticket = await getTicket(id)
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created By {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
