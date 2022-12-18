import { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface PageWrapperProps {
    children: React.ReactNode
    title: string,
    iconsUsed?: {name: string, url: string}[]
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title, iconsUsed = [] }) => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="bg-gray-800 py-4 shadow-md">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-bold text-white">My Site</h1>
                        <ul className="flex">
                            <li className="mr-6">
                                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto px-6 py-12 overflow-auto grow">
                {children}
            </main>
            <footer className="bg-gray-800 py-4 shadow-md text-center text-white">
                <p>Made with <Link href="https://nextjs.org/">Next.js</Link>{iconsUsed.length > 0 && " | Icons by"} {iconsUsed.map((icon, index) => {
                    return ( <span key={ index }>{index > 0 && ","} {index === iconsUsed.length -1 && "and "}<Link href={icon ? icon.url : ""}>{icon ? icon.name : ""}</Link></span> )})}
                    </p>
            
            </footer>
        </div>
    )
}

export default PageWrapper
