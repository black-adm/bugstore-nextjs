import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <div className="flex items-center justify-between px-10">
            <div className="flex items-center gap-5">
                <Link href="/" className="inline-flex items-center">
                    <Image
                        width="50"
                        height="50"
                        src="/logo.png"
                        alt="logo"
                    />
                    <span className="tracking-wide text-2xl font-extrabold text-white border-b-2 border-light-purple">
                        bugstore
                    </span>
                </Link>
 
                <form className="bg-primary-white flex w-[320px] items-center gap-3 rounded-lg px-5 py-3.5 ring-light-purple">

                </form>
            </div>

            <div className="flex items-center gap-4">

            </div>
        </div>
    )
}