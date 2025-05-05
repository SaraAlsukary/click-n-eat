import { Footer, Header } from "@components/index"
import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomePage
