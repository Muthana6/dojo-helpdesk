import React, {use} from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from './dojo-logo.png'

function Navbar({user}) {
    return (
        <nav>
            <Image src={Logo} alt={`dojo Helpdesk logo`}
                   width={70} quality={100} placeholder={`blur`}/>
            <h1>Dojo Helpdesk</h1>
            <Link href={`/`}>Dashboard</Link>
            <Link href={`/tickets`}>Tickets</Link>
            <Link href={`/tickets/create`}>Create Ticket</Link>
            {user && <span>Hello, {user.email} </span>}
        </nav>
    );
}

export default Navbar;
