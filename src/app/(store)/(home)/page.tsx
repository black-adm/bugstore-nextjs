import { api } from "@/data/api"
import { Product } from "@/data/types/product"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

async function getFeaturedProducts(): Promise<Product[]> {
    const response = await api("/products/featured", {
        next: {
            revalidate: 300,
        }
    })

    const products = await response.json()
    return products
}

export const metadata: Metadata = {
    title: 'Inicio'
}

export default async function Home() {
    const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()

    return (
        <div className="px-5 pt-16">
            <h1 className="pt-4 text-2xl font-bold text-primary-white tracking-wide">
                Moletom e camiseta em alta este mês 🔥
            </h1>

            <div className="mt-6 grid max-h-[860px] grid-cols-9 grid-row-6 gap-6">
                <Link
                    href={`/product/${highLightedProduct.slug}`}
                    className="group relative col-span-6 row-span-6 rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
                >
                    <Image
                        className="group-hover:scale-105 transition-transform duration-500"
                        src={highLightedProduct.image}
                        alt="Moletom Rocketseat"
                        width={920}
                        height={920}
                        quality={100}
                    />

                    <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
                        <span className="text-sm truncate">
                            {highLightedProduct.title}
                        </span>
                        <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
                            {highLightedProduct.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            })}
                        </span>
                    </div>
                </Link>

                {otherProducts.map(product => {
                    return (
                        <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            className="group relative col-span-3 row-span-3 rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
                        >
                            <Image
                                className="group-hover:scale-105 transition-transform duration-500"
                                src={product.image}
                                alt="Moletom Java"
                                width={920}
                                height={920}
                                quality={100}
                            />

                            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
                                <span className="text-sm truncate">
                                    {product.title}
                                </span>
                                <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    })}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
