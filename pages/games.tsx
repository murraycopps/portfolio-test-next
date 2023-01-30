import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import PageWrapper from "../components/PageWrapper";
import { server } from "../config";

type Game = {
  name: string;
  url: string;
  description: string;
};

export default function Games({ games }: { games: Game[] }) {
  const router = useRouter();
  
  return (
    <PageWrapper title="Games">
      <div className="container px-6 py-16 mx-auto snap-start">
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-100">
          My Games
        </h1>
        <p className="mb-8 text-lg font-medium leading-tight text-gray-400">
          A variety of html css and js games created using JavaScript classes.
        </p>
        <ul className="list-none">
          {games.map((game) => (
            <li key={game.url} className="pt-4 mb-4 snap-start">
              <h3 className="text-xl font-bold leading-tight text-gray-100">
                {game.name}
              </h3>
              <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
                {game.description}
              </p>
              <Link
                href={game.url}
                target="_blank"
                className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
              >
                View Game
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <button
        className="fixed p-4 bg-white rounded-full bottom-4 right-4"
        onClick={() => {
          router.back();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button> */}
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
