import Image from "next/image"
import { getDictionary } from './dictionaries'

export default async function HomePage({params}) {

  const { lang } = await params
  const dict = await getDictionary(lang)
  const lifeStageStyles = [
    "bg-vanilla text-gray-700",
    "bg-jasmine text-gray-700",
    "bg-sunset text-gray-700",
    "bg-wheat text-gray-700",
    "bg-ash_gray text-gray-500",
    "bg-verdigris text-gray-300",
    "bg-blue_munsell text-gray-300",
    "bg-teal text-gray-300",
    "bg-cerulean text-gray-300",
  ];

  return (
        <main className="pb-20">
          <div className="mt-1">
            <Image
              src="/bg.jpeg"
              alt={dict.home.imageAlt}
              width={1024}
              height={100}
              className="w-full h-[500px] object-fill"
            />
          </div>
          <section className="max-w-4xl mx-auto px-6 bg-white">
            <h1 className="text-3xl font-light text-gray-800 my-16 text-center">
              {dict.home.titleLine1} <br /> {dict.home.titleLine2}
            </h1>
          </section>
          <div className="p-6 sm:p-10 text-xl italic text-gray-500">
          <p className="max-w-2xl mx-auto pb-5">
            {dict.home.intro}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm ">
            {dict.home.lifeStages.map((lifeStage, index) => (
              <div
                key={lifeStage}
                className={`w-40 h-40 rounded-full m-5 inline-flex items-center justify-center ${lifeStageStyles[index]} text-xl font-bold transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer`}
              >
                {lifeStage}
              </div>
            ))}
          </div>
          </div>
        </main>
  );
}
