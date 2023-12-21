import FloatBar from "@/components/FloatBar";
import GameCard from "@/components/GameCard";
import Link from "next/link";

const mock = [
  { id: 1, name: 'Sekiro: Shadows Die Twice' },
  { id: 2, name: 'The Last of Us' },
  { id: 3, name: 'Subnautica' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
  { id: 4, name: 'Grand Theft Auto: San Andreas' },
]

export default function Homepage() {

  return (
    <>
      <div className="px-4 flex flex-1 max-w-screen-2xl items-center justify-center mx-auto">
        <FloatBar />

        <div className="mt-32 mx-auto w-full flex flex-col">
          <h1 className="text-2xl font-bold tracking-wider text-center lg:text-left lg:ml-10 xl:ml-20">
            Explore most popular games:
          </h1>

          <div className="mt-4 flex flex-wrap gap-3 justify-center">
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