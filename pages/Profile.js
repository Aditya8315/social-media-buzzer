import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router= useRouter();

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Profile / Buzzer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
              <div
                className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                onClick={() => router.push("/")}
              >
                <ArrowSmLeftIcon className="h-5 text-white" />
              </div>
              Profile
            </div>
            
             
    <div class="flex flex-col items-center pb-10 space-y-2">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={session.user.image} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-[#1d9bf0] dark:text-white">{session.user.name}</h5>
        <span class="text-sm text-gray-200 dark:text-white">@{session.user.tag}</span>
        <span class="text-sm text-gray-200 dark:text-white">{session.user.email}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a> */}
            <a href={`mailto:${session.user.email}`} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
            
          </div>
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const trendingResults = [
    {
      "heading": "T20 World Cup 2021 · LIVE",
      "description": "NZvAUS: New Zealand and Australia clash in the T20 World Cup final",
      "img": "https://rb.gy/d9yjtu",
      "tags": [
        "#T20WorldCupFinal, ",
        "Kane Williamson"
      ]
    },
    {
      "heading": "Trending in United Arab Emirates",
      "description": "#earthquake",
      "img": "https://rb.gy/jvuy4v",
      "tags": [
        "#DubaiAirshow, ",
        "#gessdubai"
      ]
    },
    {
      "heading": "Trending in Digital Creators",
      "description": "tubbo and quackity",
      "img": "",
      "tags": [
        "QUACKITY AND TUBBO,"
      ]
    }
  ];
  const followResults = [
    {
      "userImg": "https://rb.gy/urakiy",
      "username": "SpaceX",
      "tag": "@SpaceX"
    },
    {
      "userImg": "https://rb.gy/aluxgh",
      "username": "Elon Musk",
      "tag": "@elonmusk"
    },
    {
      "userImg": "https://rb.gy/zyvazm",
      "username": "Tesla",
      "tag": "@Tesla"
    }
  ];
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
       trendingResults,
       followResults,
      providers,
      session,
    },
  };
}