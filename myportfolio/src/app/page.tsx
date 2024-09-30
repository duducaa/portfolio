import { Metadata } from "next"
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata: Metadata = {
    title: "Eduardo's Portfolio"
}

export default function Page() {
    return (
        <>
            <Header />
            <div className="h-screen"></div>
            <Footer />
        </>
    )
}