'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'

export function CartWidget() {
    const { items } = useCart()

    return (
        <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-light-purple hover:text-medium-violet" />
            <div className="text-sm">
                <span className=' py-0.5 px-1.5 bg-transparent border-2 border-purple-400 rounded-full'>
                    {items.length}
                </span>
            </div>
        </div>
    )
}