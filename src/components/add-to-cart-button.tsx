'use client'

import { useCart } from "@/contexts/cart-context"

interface AddToCartButtonProps {
    productId: number
} 

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart()
    
    function handleAddProductToCart() {
        addToCart(productId)
    }

    return (
        <button
            type="button"
            onClick={handleAddProductToCart}
            className="w-full gap-x-2 mt-8 h-12 flex items-center justify-center text-center rounded-full bg-primary-white border-2 border-violet-800 font-semibold sm:text-sm lg:text-base text-medium-violet hover:bg-light-purple hover:border-none hover:text-white"
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
    )
}