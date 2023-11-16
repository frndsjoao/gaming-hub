import GameCard from "@/components/GameCard";
import Head from "next/head";

export default function Login() {

  return (
    <>
      <Head>
        <title>GamingHub | Home</title>
      </Head>

      <div className="max-w-screen-xl bg-sky-600 h-screen mx-auto relative">
        <GameCard />
      </div>
    </>
  )
}