import React from "react"
import Link from "next/link"
import { auth, signOut, signIn } from "@/auth"

const Navbar = async () => {
    /*
        para saber se 'e um usr logado
        verificamos desse jeito
    */
    const session = await auth()
    return (
        <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                {/* Botar o logo */}
                <Link href="/" className="text-black">cur10us</Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <button onClick={signOut}>
                                <span>Logout</span>
                            </button>
                            <Link href="{`/user/${session?.id}`">
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => { "use server"; await signIn('github') }}>
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar