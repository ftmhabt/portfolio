export default function Header() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-10 flex items-center text-[.75rem] border border-gray-100 rounded-full top-[1rem] w-[90vw] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:border-0 sm:shadow-[0_0_0_rgb(0,0,0,0)] sm:bg-transparent">
      <div className="p-1  items-center flex gap-2">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/149063046?v=4"
          alt="my-photo"
          width="20"
          height="20"
        />
        <div>ftmhabt</div>
      </div>
      <ul className="flex ml-auto p-1 px-3 gap-5 rounded-full sm:bg-white/50 sm:backdrop-blur-sm">
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
