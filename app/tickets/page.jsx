import TicketList from "@/app/tickets/TicketList";
import {Suspense} from "react";
import Loading from "@/app/Loading";

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets.</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}
