import TicketList from "@/app/(dashboard)/tickets/TicketList";
import {Suspense} from "react";
import Loading from "@/app/(dashboard)/Loading";

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
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}
