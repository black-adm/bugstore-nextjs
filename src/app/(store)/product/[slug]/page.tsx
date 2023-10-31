import Image from "next/image";

export default function ProductPage() {
    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src="/moletom-ia-p-devs.png"
                    alt="Moletom IA"
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>

            <div className="flex flex-col justify-center items-center text-center px-12">
                <h1 className="text-3xl font-bold leading-tight">
                    Moletom IA para Dev's
                </h1>

                <p className="mt-2.5 leading-relaxed text-primary-grey/80">
                    Moletom fabricado com 88% de algodão e 12% de poliéster.
                </p>

                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block items-center justify-center rounded-full bg-light-purple px-5 py-2.5 font-semibold">
                        R$129
                    </span>
                    <span className="text-sm text-primary-grey">
                        Em até 12x s/ juros de R$10,75
                    </span>
                </div>

                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">
                        Tamanhos
                    </span>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-300 h-9 w-14 text-sm font-semibold text-dark-violet"
                        >
                            P
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-300 h-9 w-14 text-sm font-semibold text-dark-violet"
                        >
                            M
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-300 h-9 w-14 text-sm font-semibold text-dark-violet"
                        >
                            G
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-300 h-9 w-14 text-sm font-semibold text-dark-violet"
                        >
                            GG
                        </button>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full gap-x-2 mt-8 h-12 flex items-center justify-center text-center rounded-full bg-medium-violet border-2 border-light-purple font-semibold text-purple-200 hover:bg-light-purple hover:border-none hover:text-white"
                >
                    Adicionar ao carrinho
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-basket"
                    >
                        <path d="m5 11 4-7" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                        <path d="m9 11 1 9" />
                        <path d="M4.5 15.5h15" />
                        <path d="m15 11-1 9" />
                    </svg>

                </button>
            </div>
        </div>
    )
}