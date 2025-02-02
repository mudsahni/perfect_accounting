import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative flex w-full flex-col">
                <div className="z-10">
                    <Header/>
                    <main className="flex-auto">{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
