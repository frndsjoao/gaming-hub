'use client'
import { Rating } from "@mui/material"
import { formatToDate } from "brazilian-values"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { HiHeart, HiPlus, HiXCircle } from "react-icons/hi"
import { SiEpicgames, SiSteam } from "react-icons/si"

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
  const router = useRouter();

  const game = mock
  const genres = game.genres.map((i) => i.name).join(', ')
  const platforms = game.platforms.map((i) => i.platform.name).join(', ')

  return (
    <div className="fixed top-0 left-0 w-full h-full px-4 bg-neutral-950 bg-opacity-60 z-20 flex items-center justify-center">
      <div className="w-full flex-1 bg-neutral-900 mx-auto rounded-xl relative pb-8 md:mx-12 lg:max-w-2xl">
        <button onClick={() => router.back()} className="absolute z-10 right-2 top-2 rounded-full cursor-pointer">
          <HiXCircle className="text-3xl text-neutral-600 hover:text-neutral-400 transition-all" />
        </button>
        <div className="flex-1 relative h-60 w-full md:h-64 lg:h-72">
          <Image
            src={mock.background_image}
            alt="Picture of the author"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 rounded-t-xl"
          />
        </div>

        <div className="mx-4 mt-5 md:mx-12">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="font-bold text-2xl">{game.name}</h1>
              <p className="bg-neutral-700 text-xs text-neutral-100 w-max py-0.5 px-1.5 rounded mt-1 font-normal">{formatToDate(new Date(game.released))}</p>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <SiEpicgames className="text-2xl text-neutral-50" />
              <SiSteam className="text-2xl text-neutral-50" />
            </div>
          </div>

          <div className="flex items-end mt-4">
            <button className="h-8 w-8 flex items-center justify-center mr-4 bg-neutral-100 text-neutral-900 rounded text-sm hover:bg-cyan-600 hover:text-stone-50 transition-all duration-300 md:w-auto md:px-8">
              <HiPlus className="text-lg md:mr-2" />
              <span className="hidden md:block">My Games</span>
            </button>
            <button className="h-8 w-8 flex items-center justify-center mr-4 bg-neutral-100 text-neutral-900 rounded text-sm hover:bg-cyan-600 hover:text-stone-50 transition-all duration-300 md:w-auto md:px-8">
              <HiHeart className="text-lg md:mr-2" />
              <span className="hidden md:block">Wishlist</span>
            </button>
            <div className="flex flex-col justify-center items-start ml-auto text-2xl">
              <span className="text-xs mb-1 font-light">Excellent!</span>
              <Rating className="bg-neutral-100 h-8 rounded pt-1 px-1 md:px-2" name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>

          {/* <div className="w-full mt-8 flex gap-x-8 gap-y-8 flex-wrap justify-center">
            <div className="w-5/12">
              <p className="text-xs text-neutral-600">Platforms</p>
              <p className="text-xs text-neutral-100 flex-shrink">{platforms}</p>
            </div>
            <div className="w-4/12">
              <p className="text-xs text-neutral-600">Genres</p>
              {game.genres.map((i) => (
                <p className="text-xs text-neutral-100 flex-shrink" key={i.id}>{i.name}</p>
              ))}
            </div>
            <div className="w-5/12">
              <p className="text-xs text-neutral-600">Metacritic Score</p>
              <p className="text-xs text-neutral-100 flex-shrink">{game.metacritic || '-'}</p>
            </div>
            <div className="w-4/12">
              <p className="text-xs text-neutral-600">ESRB Rating</p>
              <p className="text-xs text-neutral-100 flex-shrink">{game.esrb_rating.name_en}</p>
            </div>
          </div> */}

          <div id="divider" className="h-px bg-neutral-700 w-9/12 mx-auto mt-8 md:hidden" />

          <div className="mt-6 md:mt-10">
            <h2>Review:</h2>
            <textarea cols={30} rows={4} className='w-full mt-2 py-1 rounded-lg border-2 border-neutral-800 bg-neutral-900 px-4 bg-opacity-90 focus:outline-none focus:border-cyan-700 text-sm font-light' />
            <button className="h-8 px-8 ml-auto mt-2 flex items-center justify-center bg-neutral-100 text-neutral-900 rounded text-sm hover:bg-cyan-600 hover:text-stone-50 transition-all duration-300">
              <span className="font-medium">Save</span>
            </button>
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