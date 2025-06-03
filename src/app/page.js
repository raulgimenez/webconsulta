import Image from "next/image";

export default function Home() {

  function getRandomColor() {
    const colors = [
      "vanilla",
      "jasmine",
      "sunset",
      "wheat",
      "ash_gray",
      "verdigris",
      "blue_munsell",
      "teal",
      "cerulean"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
        <main className="pb-20">
          <div className="mt-1">
            <Image
              src="/bg.jpeg"
              alt="backgroud image"
              width={1024}
              height={100}
              className="w-full h-[500px] object-fill"
            />
          </div>
          <section className="max-w-4xl mx-auto px-6 bg-white">
            <h1 className="text-3xl font-light text-gray-800 my-16 text-center">Psicologia per tot el cicle vital <br /> des de la mirada sistèmica i psicoanalítica</h1>
          </section>
          <div className="p-6 sm:p-10 text-xl italic text-gray-500">
          <p className="max-w-2xl mx-auto pb-5">
            La proposta d’acompanyament psicològic que s’ofereix consisteix en cercar les arrels del malestar, analitzant les situacions viscudes, i convidant a l’aprofundiment per a entendre per què apareixen un o varis símptomes, i així aconseguir millores.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm ">
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-vanilla text-gray-700 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Embaràs</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-jasmine text-gray-700 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Nadons</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-sunset text-gray-700 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Criança</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-wheat text-gray-700 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Infants</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-ash_gray text-gray-500 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Adolescència</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-verdigris text-gray-300 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Parella</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-blue_munsell text-gray-300 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Família</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-teal text-gray-300 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Adultesa</div>
            <div className="w-40 h-40 rounded-full m-5 inline-flex items-center justify-center bg-cerulean text-gray-300 text-xl font-bold ransition-all duration-300 ease-in-out hover:scale-125 hover:shadow-2xl cursor-pointer">Envelliment</div>  
          </div>
          </div>
        </main>
  );
}
