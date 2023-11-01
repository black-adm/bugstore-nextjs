import { ImageResponse } from 'next/og'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'
import { env } from '@/env'

export const runtime = 'edge'
export const alt = 'About Acme'
export const contentType = 'image/png'
export const size = {
    width: 1200,
    height: 630,
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

export default async function OpenGraphImage({ params }: { params: { slug: string } }) {
    const product = await getProduct(params.slug)
    const productImageUrl = new URL(product.image, env.APP_URL).toString()

    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom, #8b00a7, #bf00ff)",
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={productImageUrl}
                    alt=""
                    style={{ width: '100%' }}
                />
            </div>
        ),
        { ...size }
    )
}