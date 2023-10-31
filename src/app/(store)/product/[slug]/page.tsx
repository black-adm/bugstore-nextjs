import { Metadata } from "next";
import Image from "next/image";

import { api } from "@/data/api";
import { Product } from "@/data/types/product";

interface ProductProps {
    params: {
        slug: string
    }
}

async function getProduct(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 300
        },
    })

    const product = await response.json()
    return product
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
    const product = await getProduct(params.slug)
    
    return {
        title: product.title,
    }
}

export default async function ProductPage({ params }: ProductProps) {
    const product = await getProduct(params.slug)

    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src={product.image}
                    alt="Moletom IA"
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>

            <div className="flex flex-col justify-center items-center text-center px-12">
                <h1 className="text-3xl font-bold leading-tight">
                    {product.title}
                </h1>

                <p className="mt-2.5 leading-relaxed text-primary-grey/80">
                    {product.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block items-center justify-center rounded-full bg-light-purple px-5 py-2.5 font-semibold">
                        {product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })}
                    </span>
                    <span className="text-sm text-primary-grey">
                        Em até 12x de <strong>
                            {(product.price / 12).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</strong> s/juros.
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
                    className="w-full gap-x-2 mt-8 h-12 flex items-center justify-center text-center rounded-full bg-primary-white border-2 border-violet-800 font-semibold text-medium-violet hover:bg-light-purple hover:border-none hover:text-white"
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