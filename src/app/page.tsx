import Link from "next/link";

export default function Login() {

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-2/4 flex flex-col items-center justify-center">
          <div>
            <h1 className="font-normal text-3xl inline-block">Gaming</h1><h1 className="font-light text-3xl inline-block text-cyan-800">Hub</h1>
          </div>
          <div id="divider" className="w-10 h-0.5 my-4 rounded bg-neutral-700" />

          <form className="w-fit mt-4 flex flex-col items-center">
            <input
              className="mb-2 placeholder-neutral-600 text-sm bg-neutral-900 w-60 px-3 py-2 rounded focus:border-b-gray-500"
              placeholder="User"
            />
            <br />
            <input
              className="mb-2 placeholder-neutral-600 text-sm bg-neutral-900 w-60 px-3 py-2 rounded focus:border-b-gray-500"
              placeholder="Password"
              type="password"
            />
            <br />
            <Link
              replace
              href="/games"
              className="flex items-center justify-center mt-2 bg-cyan-600 rounded w-60 px3 py-2 font-medium hover:bg-cyan-700 transition-colors"
            >
              Login
            </Link>
          </form>

          <button
            className="text-sm underline mt-10 hover:text-cyan-600 transition-colors"
          >
            Esqueci minha senha
          </button>
        </div>

        <div className="absolute bottom-0 w-fit mx-auto">
          <p className="inline text-xs text-neutral-800">Made with code and love by </p>
          <a
            href="https://joaofernandes.dev" className="font-bold inline text-xs text-neutral-800 hover:text-cyan-800 transition-colors">João Fernandes.</a>
        </div>
      </div>
    </>
  )
}