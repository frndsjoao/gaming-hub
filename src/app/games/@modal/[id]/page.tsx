'use client'
import { formatToDate } from "brazilian-values"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { HiPlus, HiStar, HiXCircle } from "react-icons/hi"

const mock = {
  "slug": "alan-wake-2",
  "name": "Alan Wake 2",
  "playtime": 0,
  "platforms": [
    {
      "platform": {
        "id": 4,
        "name": "PC",
        "slug": "pc"
      }
    },
    {
      "platform": {
        "id": 187,
        "name": "PlayStation 5",
        "slug": "playstation5"
      }
    },
    {
      "platform": {
        "id": 186,
        "name": "Xbox Series S/X",
        "slug": "xbox-series-x"
      }
    }
  ],
  "stores": [
    {
      "store": {
        "id": 3,
        "name": "PlayStation Store",
        "slug": "playstation-store"
      }
    },
    {
      "store": {
        "id": 11,
        "name": "Epic Games",
        "slug": "epic-games"
      }
    }
  ],
  "released": "2023-10-27",
  "tba": false,
  "background_image": "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg",
  "rating": 4.52,
  "rating_top": 5,
  "ratings": [
    {
      "id": 5,
      "title": "exceptional",
      "count": 60,
      "percent": 72.29
    },
    {
      "id": 4,
      "title": "recommended",
      "count": 12,
      "percent": 14.46
    },
    {
      "id": 3,
      "title": "meh",
      "count": 8,
      "percent": 9.64
    },
    {
      "id": 1,
      "title": "skip",
      "count": 3,
      "percent": 3.61
    }
  ],
  "ratings_count": 78,
  "reviews_text_count": 3,
  "added": 724,
  "added_by_status": {
    "yet": 107,
    "owned": 72,
    "beaten": 71,
    "toplay": 423,
    "dropped": 8,
    "playing": 43
  },
  "metacritic": null,
  "suggestions_count": 508,
  "updated": "2023-11-18T20:18:02",
  "id": 580972,
  "score": "24.137495",
  "clip": null,
  "tags": [],
  "esrb_rating": {
    "id": 4,
    "name": "Mature",
    "slug": "mature",
    "name_en": "Mature",
    "name_ru": "С 17 лет"
  },
  "user_game": null,
  "reviews_count": 83,
  "saturated_color": "0f0f0f",
  "dominant_color": "0f0f0f",
  "short_screenshots": [
    {
      "id": -1,
      "image": "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg"
    },
    {
      "id": 3888339,
      "image": "https://media.rawg.io/media/screenshots/6b8/6b8fe21f070edc4c9184062f9dc714e3.jpg"
    },
    {
      "id": 3888340,
      "image": "https://media.rawg.io/media/screenshots/cae/caefb537267fb10f3fe0413f16c733ed.jpg"
    },
    {
      "id": 3888341,
      "image": "https://media.rawg.io/media/screenshots/3e0/3e08d7746359b512714b510a1ee30163_WTYwMbp.jpg"
    },
    {
      "id": 3888342,
      "image": "https://media.rawg.io/media/screenshots/24c/24ce827e6ddae7317ced5e2d98e11d5e.jpg"
    },
    {
      "id": 3888343,
      "image": "https://media.rawg.io/media/screenshots/df2/df20dab4bfbfd611aa496116cca810bc.jpg"
    },
    {
      "id": 3888344,
      "image": "https://media.rawg.io/media/screenshots/1eb/1eb720bb7d9eea3f352fbf881666aaeb.jpg"
    }
  ],
  "parent_platforms": [
    {
      "platform": {
        "id": 1,
        "name": "PC",
        "slug": "pc"
      }
    },
    {
      "platform": {
        "id": 2,
        "name": "PlayStation",
        "slug": "playstation"
      }
    },
    {
      "platform": {
        "id": 3,
        "name": "Xbox",
        "slug": "xbox"
      }
    }
  ],
  "genres": [
    {
      "id": 4,
      "name": "Action",
      "slug": "action"
    },
    {
      "id": 5,
      "name": "Shooter",
      "slug": "action"
    }
  ]
}

function Game() {
  const game = mock
  const genres = game.genres.map((i) => i.name).join(', ')
  const platforms = game.platforms.map((i) => i.platform.name).join(', ')

  return (
    <div className="fixed top-0 left-0 w-full h-screen px-2 bg-neutral-950 bg-opacity-60 z-20 flex items-center justify-center">
      <div className="max-w-3xl h-auto flex-1 bg-neutral-900 mx-auto rounded-xl pb-10 relative">
        <Link href="/games">
          <HiXCircle className="absolute z-10 text-3xl right-2 top-2 text-neutral-700 rounded-full cursor-pointer hover:text-neutral-800 transition-all" />
        </Link>
        <div className="flex-1 relative h-72 w-full">
          <Image
            src={mock.background_image}
            alt="Picture of the author"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 rounded-t-xl"
          />
        </div>

        <div className="mx-8">
          <h1 className="mt-5 font-bold text-2xl">{game.name}</h1>
          <p className="bg-neutral-700 text-xs text-neutral-100 w-max py-0.5 px-1.5 rounded mt-1 mb-8 font-normal">{formatToDate(new Date(game.released))}</p>

          <div className="flex items-center">
            <button className="flex items-center mr-8 bg-neutral-100 text-neutral-900 px-3 py-1 rounded text-sm hover:bg-cyan-600 hover:text-stone-50 transition-all duration-300">
              <HiPlus className="mr-2 text-lg" />
              My Games
            </button>
            <button className="flex items-center bg-neutral-100 text-neutral-900 px-3 py-1 rounded text-sm hover:bg-cyan-600 hover:text-stone-50 transition-all duration-300">
              <HiPlus className="mr-2 text-lg" />
              Wishlist
            </button>
            <div className="flex items-center ml-auto text-2xl">
              <HiStar className="cursor-pointer hover:text-yellow-500 transition-all duration-300" />
              <HiStar className="cursor-pointer hover:text-yellow-500 transition-all duration-300" />
              <HiStar className="cursor-pointer hover:text-yellow-500 transition-all duration-300" />
              <HiStar className="cursor-pointer hover:text-yellow-500 transition-all duration-300" />
              <HiStar className="cursor-pointer hover:text-yellow-500 transition-all duration-300" />
            </div>
          </div>

          <div className="mx-auto max-w-xl my-6 flex gap-x-36 gap-y-8 flex-wrap justify-center">
            <div>
              <p className="text-xs text-neutral-600">Platforms</p>
              <p className="text-xs text-neutral-100 flex-shrink w-40">{platforms}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-600">Genres</p>
              {game.genres.map((i) => (
                <p className="text-xs text-neutral-100 flex-shrink w-40" key={i.id}>{i.name}</p>
              ))}
            </div>
            <div>
              <p className="text-xs text-neutral-600">Metacritic Score</p>
              <p className="text-xs text-neutral-100 flex-shrink w-40">{game.metacritic || '-'}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-600">ESRB Rating</p>
              <p className="text-xs text-neutral-100 flex-shrink w-40">{game.esrb_rating.name_en}</p>
            </div>
          </div>

          <div>
            <h2>Review:</h2>
            <textarea cols={30} rows={5} className='text-sm mt-2 py-1 rounded-lg border-2 border-neutral-800 bg-neutral-900 px-4 bg-opacity-90 focus:outline-none focus:border-cyan-700' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const params = useParams()

  return (
    <Game id={params.id} />
  )
}