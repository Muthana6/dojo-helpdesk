import {NextResponse} from "next/server";
import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

// METHOD 2 works on the whole route
export async function DELETE(_, {params}){
    const id = params.id
    const supabase = createRouteHandlerClient({cookies})
    const {error} = await supabase.from('Tickets')
        .delete()
        .eq('id', id)

    return NextResponse.json({error})
}

