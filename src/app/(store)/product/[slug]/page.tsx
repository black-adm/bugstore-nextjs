import Image from "next/image";

import { Metadata } from "next";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { AddToCartButton } from "@/components/add-to-cart-button";

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

export async function generateStaticParams() {
    const response = await api('/products/featured')
    const products: Product[] = await response.json()

    return products.map(product => {
        return { slug: product.slug }
    })
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
                    <span className="inline-block items-center justify-center rounded-full bg-light-purple px-5 py-2.5 font-semibold cursor-pointer">
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
                <AddToCartButton productId={product.id} />
            </div>
        </div>
    )
}