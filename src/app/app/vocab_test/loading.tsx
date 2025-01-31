export default function Loading() {
  return (
    <div className="flex flex-col h-svh p-5 pt-14">
      <div className="p-1 flex justify-around bg-theme-kaki rounded animate-pulse">
        <span
          className={`rounded-full aspect-square w-2 aspect-square w-2 rounded-full`}
        />
      </div>

      <div className="py-10 rounded my-5 text-xl bg-theme-turquoise animate-pulse">
        <p className="opacity-0">FILLER</p>
      </div>
      <input className="my-5 rounded py-3 border-theme-turquoise text-lg text-center animate-pulse" />
      <div className="mt-auto h-14 animate-pulse bg-theme-yellow rounded" />
    </div>
  );
}
