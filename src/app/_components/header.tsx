import Image from "next/image";

export default function Header() {
  return <nav className="flex items-center text-[.75rem] border border-gray-200 rounded-full">
    <div className="p-1  items-center flex gap-2">
        <Image 
        className="rounded-full" 
        src="https://avatars.githubusercontent.com/u/149063046?v=4" 
        alt="my-photo" 
        width='20'
        height='20'/>
        <div>ftmhabt</div>
    </div>
    <ul className="flex ml-auto p-1 px-3 gap-5">
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>;
}
