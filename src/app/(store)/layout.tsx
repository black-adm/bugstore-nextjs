import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto grid grid-rows-app gap-5 p-8 min-h-screen w-full max-w-[1600px]">
            <Header />
            {children}
            <Footer />
        </div>
    )
}