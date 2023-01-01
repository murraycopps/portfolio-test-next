import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { server } from "../config";

type Game = {
    name: string,
    url: string,
    description: string
}

export default function Games({ games }: { games: Game[] }) {

    return (
        <PageWrapper title="Games" >
            <div className="container mx-auto py-16 px-6">
                <h1 className="text-3xl font-bold leading-tight text-gray-100 mb-4">My Games</h1>
                <p className="text-lg font-medium leading-tight text-gray-400 mb-8">
                    A variety of html css and js games created using JavaScript classes.
                </p>
                <ul className="list-none">
                    {games.map((game) => (
                        <li key={game.url} className="mb-4">
                            <h3 className="text-xl font-bold leading-tight text-gray-100">{game.name}</h3>
                            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">{game.description}</p>
                            <Link href={game.url} target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600">View Game</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    )

}

export async function getServerSideProps(context: any) {
    let host = context.req.headers.host;
    try {
        let res = await fetch(`${server}${host}/api/games`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let allGames = await res.json();
        let games = allGames.data;
        return {
            props: { host, games },
        };
    }
    catch (err) {
        console.log(err)
        return {
            props: { host, games: [] },
        };
    }
}