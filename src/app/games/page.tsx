import FloatBar from "@/components/FloatBar";
import GameCard from "@/components/GameCard";
import Link from "next/link";

const mock = [
  { id: 1, name: 'Sekiro: Shadows Die Twice' },
  { id: 2, name: 'The Last of Us' },
  { id: 3, name: 'Subnautica' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
]

export default function Homepage() {

  return (
    <>
      <div className="flex flex-1">
        <FloatBar />

        <div className="mt-32 max-w-screen-2xl mx-auto px-4">
          <h1 className="ml-16 mb-4 text-2xl font-bold tracking-wider">Explore most popular games:</h1>

          <div className="flex gap-x-6 gap-y-8 flex-wrap justify-center">
            {mock.map((game) => (
              <Link key={game.id} href={`/games/${game.id}`}>
                <GameCard name={game.name} />
              </Link>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}