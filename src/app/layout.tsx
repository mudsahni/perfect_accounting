import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import {ORGANIZATION_FULL_NAME} from "@/constants/common";

export const metadata: Metadata = {
    title: {
        template: `%s - ${ORGANIZATION_FULL_NAME}`,
        default:
            ORGANIZATION_FULL_NAME
    },
    description:
        'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-stone-100">
        {/*<SwirlingBackground />*/}

        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
