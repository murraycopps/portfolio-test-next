import Link from "next/link";
import { useState, useEffect } from "react";
import { Game } from "../scripts/types";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Link href={game.url} target="_blank">
      <li
        key={game.url}
        className={`p-4 snap-start h-full rounded-lg ${game?.color}`}
      >
        <h3 className="text-2xl mb-2 font-bold leading-tight text-white">
          {game.name}
        </h3>
        <p className="text-sm font-medium leading-tight text-gray-100">
          {game.description}
        </p>
      </li>
    </Link>
  );
};

export default GameCard;
  
  
