export default function Header() {
  return <nav className="flex items-center m-4 text-[.75rem] border border-gray-200 rounded-full">
    <div className="p-1  items-center flex gap-2">
        <img className="w-[20px] h-[20px] rounded-full" src="https://avatars.githubusercontent.com/u/149063046?v=4" alt="my-photo" />
        <div>ftmhabt</div>
    </div>
    <ul className="flex ml-auto p-1 px-3 gap-5">
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>;
}
