import FloatBar from "@/components/FloatBar";
import GameCard from "@/components/GameCard";
import Head from "next/head";

export default function Login() {

  return (
    <>
      <Head>
        <title>GamingHub | Home</title>
      </Head>

      <div className="flex flex-1">
        <FloatBar />

        <div className="mt-32 max-w-screen-2xl mx-auto px-4">
          <h1 className="ml-16 mb-4 text-2xl font-bold tracking-wider">Explore most popular games:</h1>

          <div className="flex gap-x-6 gap-y-8 flex-wrap justify-center">
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>
      </div >
    </>
  )
}