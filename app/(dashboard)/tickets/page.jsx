import TicketList from "@/app/(dashboard)/tickets/TicketList";
import React, {Suspense} from "react";
import Loading from "@/app/(dashboard)/Loading";
import Link from "next/link";

export const metadata = {
    title: "Dojo Helpdesk | Tickets",
};


export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets.</small></p>
                </div>
                <Link href={`/tickets/create`} className={`ml-auto`}>
                    <button className={`btn-primary`}>Create Ticket</button>
                </Link>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}
