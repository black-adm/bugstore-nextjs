'use client'

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const query = searchParams.get('q')

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        const query = data.q

        if (!query) {
            return null
        }
        router.push(`/search?q=${query}`)
    }

    return (
        <form
            onSubmit={handleSearch}
            className="ml-8 bg-primary-white flex w-[320px] items-center gap-3 rounded-full px-4 py-2 ring-light-purple"
        >
            <Search className="h-5 w-5 text-medium-violet" />
            <input
                name="q"
                defaultValue={query ?? ''}
                placeholder="Buscar produtos"
                className="flex-1 bg-primary-white text-sm text-dark-violet outline-none placeholder:text-dark-violet"
                required
            />
        </form>
    )
}