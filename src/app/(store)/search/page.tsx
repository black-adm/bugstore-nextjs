import Image from "next/image";
import Link from "next/link";

export default function Search() {
  return (
    <div className="mt-10 flex flex-col text-center gap-4">
      <h4 className="text-2xl font-extrabold text-primary-white">
        Resultados da sua busca por : <strong className="ml-4 text-indigo-300">moletom</strong>
      </h4>

      <div className="mt-12 mx-6 grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="group relative rounded-lg bg-gradient-to-b from-medium-violet to-light-purple overflow-hidden flex justify-center items-end"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            alt="Moletom Rocketseat"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-3 h-12 flex items-center gap-2 max-w-[260px] rounded-full border-2 border-medium-violet bg-dark-violet/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="text-sm text-medium-violet flex h-full items-center justify-center rounded-full bg-primary-white px-4 font-semibold">
              {Number(129).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
