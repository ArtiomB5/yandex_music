import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <footer>{ "footer" }</footer>
        </>
    )
}