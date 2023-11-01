'use client'

import { useSearchParams } from "next/navigation"

export default function SearchLoading() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')

    return (
        <div>
            <div className="flex justify-center items-center">
                <h2 className="pt-8 pb-2 text-2xl font-bold text-primary-white">
                    Buscando pelo termo <strong className="text-purple-300">"{query}"</strong> ...
                </h2>
            </div>

            <section className="bg-transparent">
                <div className="container px-6 py-10 mx-auto animate-pulse">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                        <div className="w-full ">
                            <div className="w-full h-64 bg-gradient-to-b from-medium-violet to-light-purple rounded-lg" />
                            <h1 className="w-56 h-2 mt-4 bg-purple-400 rounded-lg" />
                            <p className="w-24 h-2 mt-4 bg-purple-400 rounded-lg" />
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gradient-to-b from-medium-violet to-light-purple rounded-lg" />
                            <h1 className="w-56 h-2 mt-4 bg-purple-400 rounded-lg" />
                            <p className="w-24 h-2 mt-4 bg-purple-400 rounded-lg" />
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gradient-to-b from-medium-violet to-light-purple rounded-lg" />
                            <h1 className="w-56 h-2 mt-4 bg-purple-400 rounded-lg" />
                            <p className="w-24 h-2 mt-4 bg-purple-400 rounded-lg" />
                        </div>

                        <div className="w-full ">
                            <div className="w-full h-64 bg-gradient-to-b from-medium-violet to-light-purple rounded-lg" />
                            <h1 className="w-56 h-2 mt-4 bg-purple-400 rounded-lg" />
                            <p className="w-24 h-2 mt-4 bg-purple-400 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}