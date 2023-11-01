import { Product } from "@/data/types/product";
import { api } from "@/data/api";
import { redirect } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 300
    },
  })

  const products = await response.json()
  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="mt-10 flex flex-col text-center gap-4">
      <h4 className="text-2xl font-extrabold text-primary-white">
        Resultados da sua busca por :
        <strong className="ml-4 text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-300">
          {query}
        </strong>
      </h4>

      <div className="mt-12 mx-6 grid grid-cols-3 gap-6">
        {products.map(product => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
            >
              <Image
                className="group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                alt="Moletom Rocketseat"
                width={480}
                height={480}
                quality={100}
              />

              <div className="absolute bottom-10 right-3 h-12 flex items-center gap-2 max-w-[260px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
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
