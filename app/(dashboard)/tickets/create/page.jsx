import {CreateForm} from "@/app/(dashboard)/tickets/create/CreateForm";

export default async function CreateTicket() {
    return (
        <main>
            <h2 className={`text-primary text-center`}>Add a New Ticket</h2>
            <CreateForm/>
        </main>
    )
}
