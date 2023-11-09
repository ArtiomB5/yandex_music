import Link from "next/link";
import { useRouter } from "next/router"

const menuItems = [
    { text: "Main", href: "/" },
    { text: "Tracks List", href: "/tracks" },
    { text: "Albums List", href: "/albums" },
]

export const Navbar = () => {
    const router = useRouter();
    return <>
        {menuItems.map((i) => <Link key={i.text} href={i.href}>{i.text}</Link>)}
    </>
}