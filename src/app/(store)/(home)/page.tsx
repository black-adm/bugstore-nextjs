import Image from "next/image"
import Link from "next/link"

export default async function Home() {
    return (
        <div className="px-5 pt-8">
            <h1 className="pt-4 text-2xl font-bold text-primary-white tracking-wide">
                Moletons em alta este mês 🔥
            </h1>

            <div className="mt-6 grid max-h-[860px] grid-cols-9 grid-row-6 gap-6">
                <Link
                    href="/"
                    className="group relative col-span-6 row-span-6 rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
                >
                    <Image
                        className="group-hover:scale-105 transition-transform duration-500"
                        src="/moletom-never-stop-learning.png"
                        alt="Moletom Rocketseat"
                        width={920}
                        height={920}
                        quality={100}
                    />

                    <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
                        <span className="text-sm truncate">
                            Moletom Never Stop Learning
                        </span>
                        <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
                            R$119,90
                        </span>
                    </div>
                </Link>

                <Link
                    href="/"
                    className="group relative col-span-3 row-span-3 rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
                >
                    <Image
                        className="group-hover:scale-105 transition-transform duration-500"
                        src="/moletom-java.png"
                        alt="Moletom Java"
                        width={920}
                        height={920}
                        quality={100}
                    />

                    <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
                        <span className="text-sm truncate">
                            Moletom Java
                        </span>
                        <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
                            R$125
                        </span>
                    </div>
                </Link>

                <Link
                    href="/"
                    className="group relative col-span-3 row-span-3 rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
                >
                    <Image
                        className="group-hover:scale-105 transition-transform duration-500"
                        src="/moletom-ai-side.png"
                        alt="Moletom IA Side"
                        width={920}
                        height={920}
                        quality={100}
                    />

                    <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
                        <span className="text-sm truncate">
                            Moletom IA Side
                        </span>
                        <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
                            R$134
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
