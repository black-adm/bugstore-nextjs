import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

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

                <form className="ml-8 bg-primary-white flex w-[320px] items-center gap-3 rounded-full px-4 py-2 ring-light-purple">
                    <Search className="h-5 w-5 text-medium-violet" />
                    <input placeholder="Buscar produtos" className="flex-1 bg-primary-white text-sm text-dark-violet outline-none placeholder:text-dark-violet" />
                </form>
            </div>

            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-light-purple hover:text-medium-violet" />
                    <span className="text-sm">(0)</span>
                </div>
                <div className="w-px h-4 bg-medium-violet" />

                <Link href="/" className="flex items-center gap-2 hover:underline hover:text-medium-violet">
                    <span className="text-sm">Conta</span>
                    <Image
                        src="https://github.com/black-adm.png"
                        className="h-6 w-6 rounded-full"
                        width="24"
                        height="24"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    )
}