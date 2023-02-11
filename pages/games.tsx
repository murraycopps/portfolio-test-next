import Link from "next/link";
import GameCard from "../components/GameCard";
import PageWrapper from "../components/PageWrapper";
import { server } from "../config";
import { Game } from "../scripts/types";

export default function Games({ games }: { games: Game[] }) {
  return (
    <PageWrapper title="Games">
      <div className="container px-6 py-16 mx-auto snap-start">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-100">
          My Games
        </h1>
        <p className="mb-8 text-lg font-medium leading-tight text-gray-400">
          A variety of html css and js games created using JavaScript classes.
        </p>
        <ul className="list-none grid grid-cols-2 gap-4">
          {games.map((game, i) => (
            <GameCard game={game} key={i} />
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
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
  } catch (err) {
    console.log(err);
    return {
      props: { host, games: [] },
    };
  }
}
